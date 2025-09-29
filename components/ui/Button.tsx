
'use client';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit';
}

export default function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md',
  className = '',
  disabled = false,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'font-medium transition-all duration-200 !rounded-button flex items-center justify-center';
  
  const variants = {
    primary: 'bg-amber-600 hover:bg-amber-700 text-white shadow-sm',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-900',
    outline: 'border-2 border-amber-600 text-amber-600 hover:bg-amber-50'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
    >
      {children}
    </button>
  );
}
