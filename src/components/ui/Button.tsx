import Link from 'next/link';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const baseStyles = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00D4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-white text-black hover:bg-[#00D4FF] hover:text-black hover-glow',
  secondary: 'bg-transparent text-white border-2 border-white hover:bg-white hover:text-black',
  ghost: 'bg-transparent text-white link-underline hover:text-[#00D4FF]',
};

const sizes: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-full',
  md: 'px-6 py-3 text-base rounded-full',
  lg: 'px-8 py-4 text-lg rounded-full',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  disabled = false,
  loading = false,
  type = 'button',
  onClick,
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const content = loading ? (
    <>
      <span className="loading-spinner mr-2" />
      {children}
    </>
  ) : (
    children
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
