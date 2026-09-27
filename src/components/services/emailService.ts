// src/components/services/emailService.ts
import emailjs from '@emailjs/browser';

interface AccessRequest {
  fullName: string;
  email: string;
  organization: string;
  position: string;
  purpose: string;
  relationship: 'recruiter' | 'employer' | 'academic' | 'colleague' | 'other';
  urgency: 'low' | 'medium' | 'high';
  additionalInfo: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

class EmailService {
  private static instance: EmailService;
  
  // Base configuration
  private readonly TIMEZONE = process.env.NEXT_PUBLIC_TIMEZONE || 'Africa/Malabo';

  // SECURE CONFIGURATION: No hardcoded fallbacks
  private readonly GRADES_SERVICE_ID = process.env.NEXT_PUBLIC_GRADES_SERVICE_ID as string;
  private readonly GRADES_PUBLIC_KEY = process.env.NEXT_PUBLIC_GRADES_PUBLIC_KEY as string;
  private readonly GRADES_OWNER_TEMPLATE_ID = process.env.NEXT_PUBLIC_GRADES_OWNER_TEMPLATE_ID as string;
  private readonly GRADES_REQUESTER_TEMPLATE_ID = process.env.NEXT_PUBLIC_GRADES_REQUESTER_TEMPLATE_ID as string;

  private readonly CONTACT_SERVICE_ID = process.env.NEXT_PUBLIC_CONTACT_SERVICE_ID as string;
  private readonly CONTACT_PUBLIC_KEY = process.env.NEXT_PUBLIC_CONTACT_PUBLIC_KEY as string;
  private readonly CONTACT_TEMPLATE_ID = process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID as string;

  constructor() {
    if (this.GRADES_PUBLIC_KEY) {
      emailjs.init(this.GRADES_PUBLIC_KEY);
    } else {
      console.warn("EmailJS Keys missing. Check .env.local or Vercel Environment Variables.");
    }
  }

  static getInstance(): EmailService {
    if (!EmailService.instance) {
      EmailService.instance = new EmailService();
    }
    return EmailService.instance;
  }

  async sendOwnerNotification(request: AccessRequest): Promise<void> {
    const templateParams = {
      to_email: 'owonoondomangue@gmail.com',
      from_name: 'Academic Records System',
      requester_name: request.fullName,
      requester_email: request.email,
      requester_organization: request.organization,
      requester_position: request.position,
      request_purpose: request.purpose,
      relationship_type: request.relationship,
      urgency_level: request.urgency,
      additional_info: request.additionalInfo || 'None provided',
      timestamp: new Date().toLocaleString('en-US', {
        timeZone: this.TIMEZONE,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      await emailjs.send(
        this.GRADES_SERVICE_ID,
        this.GRADES_OWNER_TEMPLATE_ID,
        templateParams,
        this.GRADES_PUBLIC_KEY
      );
    } catch (error) {
      console.error('Failed to send owner notification:', error);
      throw new Error('Failed to send owner notification');
    }
  }

  async sendRequesterConfirmation(request: AccessRequest, requestId: string): Promise<void> {
    const templateParams = {
      to_email: request.email,
      to_name: request.fullName,
      from_name: 'Pedro Fabian Owono - Academic Records',
      request_id: requestId,
      organization: request.organization,
      purpose: request.purpose,
      urgency: request.urgency,
      estimated_response_time: request.urgency === 'high' ? '12-24 hours' : 
                              request.urgency === 'medium' ? '24-48 hours' : '2-3 business days',
      timestamp: new Date().toLocaleString('en-US', {
        timeZone: this.TIMEZONE,
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    try {
      await emailjs.send(
        this.GRADES_SERVICE_ID,
        this.GRADES_REQUESTER_TEMPLATE_ID,
        templateParams,
        this.GRADES_PUBLIC_KEY
      );
    } catch (error) {
      console.error('Failed to send requester confirmation:', error);
      throw new Error('Failed to send confirmation email');
    }
  }

  async sendAccessRequest(request: AccessRequest): Promise<{ success: boolean; requestId: string; message: string }> {
    try {
      const requestId = this.generateRequestId();
      
      await Promise.all([
        this.sendRequesterConfirmation(request, requestId),
        this.sendOwnerNotification(request)
      ]);

      return {
        success: true,
        requestId: requestId,
        message: 'Access request submitted successfully. You should receive a confirmation email shortly.'
      };
    } catch (error) {
      console.error('Error processing access request:', error);
      return {
        success: false,
        requestId: '',
        message: 'Failed to send request. Please try again or contact Pedro directly at owonoondomangue@gmail.com.'
      };
    }
  }

  async sendContactMessage(formData: ContactFormData): Promise<{ success: boolean; message: string }> {
    try {
      const templateParams = {
        to_email: 'owonoondomangue@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        reply_to: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: new Date().toLocaleString('en-US', {
          timeZone: this.TIMEZONE,
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      await emailjs.send(
        this.CONTACT_SERVICE_ID,
        this.CONTACT_TEMPLATE_ID,
        templateParams,
        this.CONTACT_PUBLIC_KEY
      );

      return {
        success: true,
        message: 'Message sent successfully! Pedro will get back to you soon.'
      };
    } catch (error) {
      console.error('Failed to send contact message:', error);
      return {
        success: false,
        message: 'Failed to send message. Please try again or email directly at owonoondomangue@gmail.com.'
      };
    }
  }

  private generateRequestId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substr(2, 5);
    return `AR-${timestamp}-${random}`.toUpperCase();
  }
}

export const emailService = EmailService.getInstance();