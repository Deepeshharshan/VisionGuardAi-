// ============================================================
// Button — Enterprise Button Component
// ============================================================
import React from 'react';
import { cn } from '@/utils';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  as?: 'button' | 'a';
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-blue-600 text-white border border-transparent hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] active:scale-[0.98]',
  secondary:
    'bg-transparent text-slate-100 border border-slate-600 hover:bg-slate-800 hover:border-slate-500 active:scale-[0.98]',
  ghost:
    'bg-transparent text-slate-400 border border-transparent hover:bg-slate-800 hover:text-slate-100 active:scale-[0.98]',
  danger:
    'bg-red-600/10 text-red-400 border border-red-600/30 hover:bg-red-600/20 hover:border-red-500/50 active:scale-[0.98]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-xs gap-1.5',
  md: 'px-4 py-2 text-sm gap-2',
  lg: 'px-5 py-2.5 text-sm gap-2',
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      icon,
      iconRight,
      children,
      className,
      disabled,
      type = 'button',
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        className={cn(
          'inline-flex items-center justify-center font-semibold rounded-md',
          'transition-all duration-150 cursor-pointer whitespace-nowrap',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900',
          'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {loading ? (
          <svg
            className="animate-spin w-4 h-4 flex-shrink-0"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12" cy="12" r="10"
              stroke="currentColor" strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          icon && <span className="flex-shrink-0 w-4 h-4">{icon}</span>
        )}
        {children}
        {iconRight && !loading && (
          <span className="flex-shrink-0 w-4 h-4">{iconRight}</span>
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';
