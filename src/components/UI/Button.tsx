import type { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button = ({ variant = 'primary', className = '', children, ...props }: ButtonProps) => {
  const base = 'h-10 rounded-lg px-4 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-40';
  const variants = {
    primary: 'bg-[#0f57ba] text-white hover:bg-[#49a2ff]',
    secondary: 'bg-[#1f3b8e] text-[#ebf4ff] hover:bg-[#3f66c5]',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};
