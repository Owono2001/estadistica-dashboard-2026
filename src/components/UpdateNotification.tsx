// src/components/UpdateNotification.tsx
"use client"

import React, { useState, useEffect } from 'react';
import { Bell, X, ChevronRight } from 'lucide-react';

// 🚀 BUMP TO VERSION 2.0 DUE TO ARCHITECTURE OVERHAUL
const CURRENT_VERSION = 'v11';
const UPDATE_NOTES = [
  "🚀 Architecture Upgrade: Migrated to Next.js 15 App Router for enterprise-grade performance.",
  "💼 B2B Focus: Streamlined interface focusing strictly on IT/OT Integration and HSE Engineering.",
  "⚡ Server-Side Optimization: Improved Core Web Vitals and eliminated layout shifts.",
  "🔒 Security Enhancements: Migrated to secure server-side environment variables."
];

const UpdateNotification: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check the last version the user saw
    const lastSeenVersion = localStorage.getItem('portfolio_version');
    
    // If they haven't seen this current version, show the notification
    if (lastSeenVersion !== CURRENT_VERSION) {
      // Small 2-second delay so it pops up smoothly after the site loads
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    // Save the current version to their browser so it doesn't show again
    localStorage.setItem('portfolio_version', CURRENT_VERSION);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-step max-w-sm w-[calc(100%-3rem)]">
      <div className="bg-slate-900/95 backdrop-blur-xl border border-slate-700 rounded-xl p-5 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
        
        {/* Animated Background Line */}
        <div className="absolute top-0 left-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 w-full"></div>

        {/* Close Button */}
        <button 
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-100 transition-colors p-1 rounded-md hover:bg-slate-800"
          aria-label="Close notification"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Bell size={18} className="text-blue-400 animate-pulse" />
          </div>
          <h4 className="text-slate-100 font-cyber font-bold text-lg">
            System Updated
          </h4>
        </div>

        {/* Update List */}
        <div className="space-y-2 mb-5">
          <p className="text-slate-400 text-xs font-tech uppercase tracking-wider mb-3 border-b border-slate-700/50 pb-2">
            What's new in {CURRENT_VERSION}:
          </p>
          {UPDATE_NOTES.map((note, index) => (
            <div key={index} className="flex items-start gap-2">
              <ChevronRight size={14} className="text-indigo-400 flex-shrink-0 mt-0.5" />
              <p className="text-slate-300 text-sm leading-tight">{note}</p>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button 
          onClick={handleDismiss}
          className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-tech text-sm font-semibold transition-all active:scale-95 shadow-md shadow-blue-900/20"
        >
          Acknowledge
        </button>
      </div>
    </div>
  );
};

export default UpdateNotification;