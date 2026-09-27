// src/components/services/calendarService.ts
import emailjs from '@emailjs/browser';

export interface MeetingType {
  id: string;
  title: string;
  description: string;
  duration: number; 
  color: string;
  icon: string;
  price?: number; 
}

export interface TimeSlot {
  id: string;
  date: string; 
  time: string; 
  available: boolean;
  timezone: string;
}

export interface BookingRequest {
  id: string;
  meetingType: MeetingType;
  selectedDate: string;
  selectedTime: string;
  duration: number;
  clientInfo: {
    name: string;
    email: string;
    company?: string;
    phone?: string;
    message?: string;
  };
  timezone: string;
  status: 'pending' | 'confirmed' | 'cancelled';
  createdAt: string;
  meetingLink?: string;
}

export const MEETING_TYPES: MeetingType[] = [
  {
    id: 'career-discussion',
    title: 'Career Discussion',
    description: 'General discussion about opportunities, projects, and collaboration',
    duration: 30,
    color: '#00f3ff',
    icon: '💼'
  },
  {
    id: 'technical-interview',
    title: 'Technical Interview',
    description: 'Technical discussion, code review, or technical assessment',
    duration: 60,
    color: '#ff00ff',
    icon: '⚡'
  },
  {
    id: 'project-consultation',
    title: 'Project Consultation',
    description: 'Discuss AI projects, software development, or technical guidance',
    duration: 45,
    color: '#00ff00',
    icon: '🚀'
  },
  {
    id: 'quick-chat',
    title: 'Quick Chat',
    description: 'Brief introduction or quick questions (15 minutes)',
    duration: 15,
    color: '#ffff00',
    icon: '☕'
  }
];

class CalendarService {
  private static instance: CalendarService;
  
  // SECURE CONFIGURATION: No hardcoded fallbacks
  private readonly SERVICE_ID = process.env.NEXT_PUBLIC_CALENDAR_SERVICE_ID as string;
  private readonly BOOKING_TEMPLATE_ID = process.env.NEXT_PUBLIC_BOOKING_CONFIRMATION_TEMPLATE_ID as string;
  private readonly OWNER_NOTIFICATION_ID = process.env.NEXT_PUBLIC_BOOKING_NOTIFICATION_TEMPLATE_ID as string;
  private readonly PUBLIC_KEY = process.env.NEXT_PUBLIC_CALENDAR_PUBLIC_KEY as string;
  private readonly BUSINESS_HOURS = {
  start: '09:00',
  end: '17:00',
  timezone: process.env.NEXT_PUBLIC_TIMEZONE || 'Africa/Malabo',
  workingDays: [1, 2, 3, 4, 5] 
};

  private readonly BREAK_TIMES = [
    { start: '12:00', end: '13:00' }, 
    { start: '15:00', end: '15:15' }  
  ];

  private bookings: BookingRequest[] = [];

  constructor() {
    if (this.PUBLIC_KEY) {
      emailjs.init(this.PUBLIC_KEY);
    }
  }

  static getInstance(): CalendarService {
    if (!CalendarService.instance) {
      CalendarService.instance = new CalendarService();
    }
    return CalendarService.instance;
  }

  generateAvailableSlots(startDate: Date, endDate: Date): TimeSlot[] {
    const slots: TimeSlot[] = [];
    const currentDate = new Date(startDate);

    while (currentDate <= endDate) {
      if (this.BUSINESS_HOURS.workingDays.includes(currentDate.getDay())) {
        const dateStr = this.formatDate(currentDate);
        const daySlots = this.generateDaySlots(dateStr);
        slots.push(...daySlots);
      }
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return slots;
  }

  private generateDaySlots(date: string): TimeSlot[] {
    const slots: TimeSlot[] = [];
    const startTime = this.parseTime(this.BUSINESS_HOURS.start);
    const endTime = this.parseTime(this.BUSINESS_HOURS.end);
    const slotInterval = 15; 
    let currentTime = startTime;
    let slotId = 1;

    while (currentTime < endTime) {
      const timeStr = this.formatTime(currentTime);
      const isAvailable = this.isTimeSlotAvailable(timeStr, date);
      
      slots.push({
        id: `${date}-${timeStr}-${slotId}`,
        date: date,
        time: timeStr,
        available: isAvailable,
        timezone: this.BUSINESS_HOURS.timezone
      });

      currentTime.setMinutes(currentTime.getMinutes() + slotInterval);
      slotId++;
    }
    return slots;
  }

  private isTimeSlotAvailable(time: string, date: string): boolean {
    const timeMinutes = this.timeToMinutes(time);
    
    for (const breakTime of this.BREAK_TIMES) {
      const breakStart = this.timeToMinutes(breakTime.start);
      const breakEnd = this.timeToMinutes(breakTime.end);
      
      if (timeMinutes >= breakStart && timeMinutes < breakEnd) {
        return false;
      }
    }

    const slotDateTime = new Date(`${date}T${time}:00`);
    const now = new Date();
    
    if (slotDateTime <= now) {
      return false;
    }

    const isBooked = this.bookings.some(booking => 
      booking.selectedDate === date && 
      booking.selectedTime === time && 
      booking.status !== 'cancelled'
    );

    return !isBooked;
  }

  getAvailableSlots(daysAhead: number = 14): TimeSlot[] {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + 1); 
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + daysAhead);
    
    return this.generateAvailableSlots(startDate, endDate);
  }

  async createBooking(booking: Omit<BookingRequest, 'id' | 'status' | 'createdAt'>): Promise<{ success: boolean; bookingId: string; message: string }> {
    try {
      const bookingId = this.generateBookingId();
      const timestamp = new Date().toISOString();
      
      const fullBooking: BookingRequest = {
        ...booking,
        id: bookingId,
        status: 'pending',
        createdAt: timestamp,
        meetingLink: this.generateMeetingLink(bookingId)
      };

      this.storeBookingInMemory(fullBooking);

      try {
        await Promise.all([
          this.sendBookingConfirmation(fullBooking),
          this.sendOwnerNotification(fullBooking)
        ]);
      } catch (emailError) {
        console.warn('⚠️ Failed to send booking emails, but booking was still created:', emailError);
      }

      return {
        success: true,
        bookingId: bookingId,
        message: 'Booking created successfully! You should receive a confirmation email shortly.'
      };

    } catch (error) {
      console.error('❌ Failed to create booking:', error);
      return {
        success: false,
        bookingId: '',
        message: 'Failed to create booking. Please try again or contact directly at owonoondomangue@gmail.com.'
      };
    }
  }

  private async sendBookingConfirmation(booking: BookingRequest): Promise<void> {
    const templateParams = {
      to_email: booking.clientInfo.email,
      to_name: booking.clientInfo.name,
      from_name: 'Pedro Fabian Owono',
      reply_to: 'owonoondomangue@gmail.com',
      meeting_type: booking.meetingType.title,
      meeting_date: this.formatDisplayDate(booking.selectedDate),
      meeting_time: booking.selectedTime,
      meeting_duration: booking.duration.toString(),
      booking_id: booking.id,
      meeting_link: booking.meetingLink || 'Will be provided via email',
      client_message: booking.clientInfo.message || 'No additional message provided',
      client_company: booking.clientInfo.company || 'Not specified',
      client_phone: booking.clientInfo.phone || 'Not provided',
      timestamp: new Date().toLocaleString('en-US', {
        timeZone: this.BUSINESS_HOURS.timezone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      await emailjs.send(
        this.SERVICE_ID, 
        this.BOOKING_TEMPLATE_ID, 
        templateParams,
        this.PUBLIC_KEY
      );
    } catch (error) {
      throw new Error('Failed to send confirmation email');
    }
  }

  private async sendOwnerNotification(booking: BookingRequest): Promise<void> {
    const templateParams = {
      to_email: 'owonoondomangue@gmail.com',
      from_name: 'Calendar System',
      reply_to: booking.clientInfo.email,
      client_name: booking.clientInfo.name,
      client_email: booking.clientInfo.email,
      client_company: booking.clientInfo.company || 'Not specified',
      client_phone: booking.clientInfo.phone || 'Not provided',
      meeting_type: booking.meetingType.title,
      meeting_date: this.formatDisplayDate(booking.selectedDate),
      meeting_time: booking.selectedTime,
      meeting_duration: booking.duration.toString(),
      booking_id: booking.id,
      client_message: booking.clientInfo.message || 'No additional message provided',
      meeting_link: booking.meetingLink || 'Google Meet link will be generated',
      timestamp: new Date().toLocaleString('en-US', {
        timeZone: this.BUSINESS_HOURS.timezone,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      await emailjs.send(
        this.SERVICE_ID, 
        this.OWNER_NOTIFICATION_ID, 
        templateParams,
        this.PUBLIC_KEY
      );
    } catch (error) {
      throw new Error('Failed to send owner notification');
    }
  }

  getBooking(bookingId: string): BookingRequest | null {
    return this.bookings.find(b => b.id === bookingId) || null;
  }

  getAllBookings(): BookingRequest[] {
    return [...this.bookings];
  }

  private generateBookingId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 5);
    return `BK-${timestamp}-${random}`.toUpperCase();
  }

  private generateMeetingLink(bookingId: string): string {
    return `https://meet.google.com/new?meeting_id=${bookingId}`;
  }

  private storeBookingInMemory(booking: BookingRequest): void {
    this.bookings.push(booking);
  }

  private parseTime(timeStr: string): Date {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    return date;
  }

  private formatTime(date: Date): string {
    return date.toTimeString().slice(0, 5);
  }

  private formatDate(date: Date): string {
    return date.toISOString().split('T')[0];
  }

  private formatDisplayDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  private timeToMinutes(timeStr: string): number {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }

  getMeetingTypes(): MeetingType[] {
    return MEETING_TYPES;
  }

  getBusinessHours() {
    return this.BUSINESS_HOURS;
  }
}

export const calendarService = CalendarService.getInstance();