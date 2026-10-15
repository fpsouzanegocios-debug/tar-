import React from 'react';
import type { ZodiacSignId } from '../types/tarot';

interface ZodiacGlyphProps {
  signId: ZodiacSignId;
  className?: string;
  size?: number;
}

export const ZodiacGlyph: React.FC<ZodiacGlyphProps> = ({
  signId,
  className = 'w-6 h-6',
  size = 24,
}) => {
  const commonProps = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.8',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    width: size,
    height: size,
    className,
  };

  switch (signId) {
    case 'aries':
      return (
        <svg {...commonProps}>
          <path d="M12 21V8" />
          <path d="M12 8C10.5 4.5 5 4.5 5 8.5C5 11 7 12.5 9.5 12" />
          <path d="M12 8C13.5 4.5 19 4.5 19 8.5C19 11 17 12.5 14.5 12" />
        </svg>
      );

    case 'touro':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="14" r="5.5" />
          <path d="M6 4.5C6 7.5 8.5 9 12 9C15.5 9 18 7.5 18 4.5" />
        </svg>
      );

    case 'gemeos':
      return (
        <svg {...commonProps}>
          <path d="M5 4.5C9 6.5 15 6.5 19 4.5" />
          <path d="M5 19.5C9 17.5 15 17.5 19 19.5" />
          <path d="M9 5.5V18.5" />
          <path d="M15 5.5V18.5" />
        </svg>
      );

    case 'cancer':
      return (
        <svg {...commonProps}>
          <circle cx="8" cy="9" r="3" />
          <path d="M11 9C11 6.5 14.5 5.5 18 7" />
          <circle cx="16" cy="15" r="3" />
          <path d="M13 15C13 17.5 9.5 18.5 6 17" />
        </svg>
      );

    case 'leao':
      return (
        <svg {...commonProps}>
          <circle cx="7" cy="14.5" r="2.8" />
          <path d="M9.6 13.5C10.5 10 12.5 5.5 16 5.5C18.5 5.5 19.5 7.5 19.5 9.5C19.5 13 16 16.5 16 19.5" />
          <circle cx="17.5" cy="19.5" r="1.5" />
        </svg>
      );

    case 'virgem':
      return (
        <svg {...commonProps}>
          <path d="M4 6V15C4 16.5 5 17.5 6.5 17.5C8 17.5 9 16.5 9 15V6" />
          <path d="M9 11.5C9.5 9 11.5 7.5 13.5 7.5C15 7.5 16 8.5 16 10.5V18.5" />
          <path d="M16 12C17 9.5 19 8.5 20.5 10.5C21.5 12 21 14 19.5 15.5L15.5 19.5" />
          <path d="M15 15.5L18.5 19" />
        </svg>
      );

    case 'libra':
      return (
        <svg {...commonProps}>
          <path d="M4 19.5H20" />
          <path d="M4 15.5H8.5C9 12.5 10.2 10.5 12 10.5C13.8 10.5 15 12.5 15.5 15.5H20" />
        </svg>
      );

    case 'escorpiao':
      return (
        <svg {...commonProps}>
          <path d="M4 6V15C4 16.5 5 17.5 6.5 17.5C8 17.5 9 16.5 9 15V6" />
          <path d="M9 11.5C9.5 9 11.5 7.5 13.5 7.5C15 7.5 16 8.5 16 10.5V17" />
          <path d="M16 17H19.5" />
          <path d="M17.5 15L20 17L17.5 19" />
        </svg>
      );

    case 'sagitario':
      return (
        <svg {...commonProps}>
          <path d="M6 18L19 5" />
          <path d="M13.5 5H19V10.5" />
          <path d="M9 11.5L12.5 15" />
        </svg>
      );

    case 'capricornio':
      return (
        <svg {...commonProps}>
          <path d="M4 6V14.5C4 16 5 17.5 7 17.5C9 17.5 10 16 10 14.5V6" />
          <path d="M10 11C11 8.5 13 8 14.5 9.5C16 11 15.5 13.5 14 15.5L13.5 16.5C12.5 18 13.5 20.5 15.5 20.5C17.5 20.5 18.5 19 18.5 17.5" />
        </svg>
      );

    case 'aquario':
      return (
        <svg {...commonProps}>
          <path d="M3.5 9.5L6.5 7L9.5 9.5L12.5 7L15.5 9.5L18.5 7L20.5 8.5" />
          <path d="M3.5 15.5L6.5 13L9.5 15.5L12.5 13L15.5 15.5L18.5 13L20.5 14.5" />
        </svg>
      );

    case 'peixes':
      return (
        <svg {...commonProps}>
          <path d="M6 4C8.5 8 8.5 16 6 20" />
          <path d="M18 4C15.5 8 15.5 16 18 20" />
          <path d="M4 12H20" />
        </svg>
      );

    default:
      return null;
  }
};
