interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = '', hover = true }: CardProps) {
  const hoverClasses = hover ? 'hover-lift hover-border-accent' : '';

  return (
    <div
      className={`bg-[#18181B] border border-[#27272A] rounded-xl p-6 transition-all duration-300 ${hoverClasses} ${className}`}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
  as?: 'h2' | 'h3' | 'h4';
  className?: string;
}

export function CardTitle({ children, as: Tag = 'h3', className = '' }: CardTitleProps) {
  return (
    <Tag className={`text-xl font-semibold text-white ${className}`}>
      {children}
    </Tag>
  );
}

interface CardDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export function CardDescription({ children, className = '' }: CardDescriptionProps) {
  return (
    <p className={`text-[#A1A1AA] mt-2 ${className}`}>
      {children}
    </p>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}
