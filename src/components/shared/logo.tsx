import Link from 'next/link';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  href?: string;
}

const SIZES = {
  sm: { icon: 'h-7 w-7', text: 'text-base' },
  md: { icon: 'h-9 w-9', text: 'text-lg' },
  lg: { icon: 'h-12 w-12', text: 'text-2xl' },
};

export function Logo({ className, size = 'md', href = '/' }: LogoProps) {
  const sizes = SIZES[size];

  const content = (
    <div className={cn('flex items-center gap-2.5', className)}>
      <div
        className={cn(
          'glass-elevated relative flex items-center justify-center rounded-xl',
          sizes.icon
        )}
      >
        <span
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary opacity-30 blur-md"
          aria-hidden
        />
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative h-1/2 w-1/2"
        >
          <path
            d="M3 12C3 7 7 3 12 3C17 3 21 7 21 12C21 17 17 21 12 21"
            stroke="url(#gradient1)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M12 8V12L15 14"
            stroke="url(#gradient1)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <linearGradient id="gradient1" x1="3" y1="3" x2="21" y2="21">
              <stop stopColor="#a855f7" />
              <stop offset="1" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <span className={cn('font-bold tracking-tight', sizes.text)}>
        Shadow<span className="gradient-text">Reply</span>
      </span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="transition-opacity hover:opacity-80 focus-visible:opacity-80 focus-visible:outline-none"
      >
        {content}
      </Link>
    );
  }

  return content;
}