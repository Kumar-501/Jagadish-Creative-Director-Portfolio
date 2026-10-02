// Centralized reusable SVG Icons
import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
}

export const Icon = {
  linkedin: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <path d="M7.5 10v6.5M7.5 7.2v.03M12 16.5v-4a2.3 2.3 0 0 1 4.6 0v4M12 12.4v4.1" />
    </svg>
  ),
  instagram: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  ),
  youtube: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.7 15 12l-4.5 2.3z" fill="currentColor" stroke="none" />
    </svg>
  ),
  mail: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2.5" />
      <path d="m4 6.5 8 6.4 8-6.4" />
    </svg>
  ),
  whatsapp: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M20.2 11.7a8.2 8.2 0 0 1-12.1 7.2L4 20l1.2-4a8.2 8.2 0 1 1 15-4.3Z" />
      <path d="M8.5 8.2c.2-.5.5-.5.8-.5h.4c.2 0 .4.1.5.4l.7 1.7c.1.2.1.4-.1.6l-.5.6c-.2.2-.2.4 0 .6.4.7 1.1 1.4 1.8 1.8.2.1.4.1.6-.1l.6-.7c.2-.2.4-.2.6-.1l1.7.8c.2.1.4.3.4.5 0 .3-.2.8-.5 1-.4.4-1 .6-1.6.5-1-.1-2.2-.7-3.4-1.8-1.2-1.1-2-2.4-2.2-3.4-.1-.7.1-1.4.4-1.9Z" />
    </svg>
  ),
  arrow: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
  download: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M12 3v12m0 0-4.5-4.5M12 15l4.5-4.5M4 18v1.5A1.5 1.5 0 0 0 5.5 21h13a1.5 1.5 0 0 0 1.5-1.5V18" />
    </svg>
  ),
  clapper: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M3 9.5 4.4 4h13.4L20 9.5M3 9.5V19a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V9.5H3Z" />
      <path d="m6 4 2 5.5M10.3 4l2 5.5M14.6 4l2 5.5" />
    </svg>
  ),
  megaphone: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M3 10v4a1 1 0 0 0 1 1h2l7 4V5L6 9H4a1 1 0 0 0-1 1Z" />
      <path d="M17.5 8.5a5 5 0 0 1 0 7" />
    </svg>
  ),
  camera: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M4 8h3l1.5-2h7L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z" />
      <circle cx="12" cy="13.5" r="3.3" />
    </svg>
  ),
  chart: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
    </svg>
  ),
  robot: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <rect x="5" y="8" width="14" height="11" rx="2.5" />
      <path d="M12 4.5v3.5M9 13v1.5M15 13v1.5" strokeLinecap="round" />
      <circle cx="12" cy="3.2" r="1.1" />
      <path d="M2.5 12h2.5M19 12h2.5" />
    </svg>
  ),
  briefcase: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5M3 12.5h18" />
    </svg>
  ),
  bulb: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.9V16h5v-.2c0-.8.4-1.5 1-1.9A6 6 0 0 0 12 3Z" />
    </svg>
  ),
  people: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <circle cx="9" cy="8" r="3" />
      <path d="M2.5 19c.6-3.2 3-5 6.5-5s5.9 1.8 6.5 5" />
      <circle cx="17" cy="8.5" r="2.3" />
      <path d="M15.8 14.3c2.7.3 4.6 1.9 5.1 4.7" />
    </svg>
  ),
  rupee: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...p}>
      <path d="M6 4h12M6 8h12M6 4c4.5 0 7.5 1.6 7.5 4.5S14.5 13 10 13H6l8 7" />
    </svg>
  ),
  phone: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M6.5 3h2.7l1.3 4-2 1.5a12 12 0 0 0 5.5 5.5l1.5-2 4 1.3v2.7a2 2 0 0 1-2.2 2A17 17 0 0 1 4.5 5.2 2 2 0 0 1 6.5 3Z" />
    </svg>
  ),
  pin: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}>
      <path d="M12 21s7-6.5 7-11.5a7 7 0 1 0-14 0C5 14.5 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.3" />
    </svg>
  ),
  close: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  ),
  play: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  ),
  eye: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  sparkles: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
    </svg>
  ),
  filter: (p: IconProps) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...p}>
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
    </svg>
  ),
};
