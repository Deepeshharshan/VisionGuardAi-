import React from 'react';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon;
  title: string;
  description: string;
  action?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({ 
  icon: Icon, 
  title, 
  description, 
  action, 
  className,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center p-12 text-center rounded-xl border border-dashed border-zinc-800 bg-zinc-900/50",
        className
      )}
      {...props}
    >
      <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-zinc-400" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-zinc-400 max-w-sm mb-6 leading-relaxed">
        {description}
      </p>
      {action && (
        <div className="mt-2">
          {action}
        </div>
      )}
    </div>
  );
};
