'use client';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gradient' | 'outline';
  className?: string;
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  const variants = {
    default: 'bg-white/5 border border-white/10 text-gray-300',
    gradient: 'bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-purple-300',
    outline: 'border border-white/20 text-gray-400',
  };

  return (
    <span
      className={`
        inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}
