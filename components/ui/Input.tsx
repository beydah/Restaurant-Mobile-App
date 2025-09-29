
'use client';

interface InputProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  name?: string;
  required?: boolean;
  disabled?: boolean;
}

export default function Input({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  name,
  required = false,
  disabled = false
}: InputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      required={required}
      disabled={disabled}
      className={`w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-amber-600 focus:ring-2 focus:ring-amber-100 outline-none transition-all text-sm ${disabled ? 'bg-gray-50 cursor-not-allowed' : 'bg-white'} ${className}`}
    />
  );
}
