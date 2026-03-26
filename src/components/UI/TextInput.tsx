import type { InputHTMLAttributes } from 'react';

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const TextInput = ({ label, className = '', ...props }: TextInputProps) => (
  <label className="flex flex-col gap-2 text-sm text-[#9db4f6]">
    {label && <span>{label}</span>}
    <input
      type="text"
      className={`rounded-lg border border-[#2f3f74] bg-[#081239] px-3 py-2 text-white outline-none ring-2 ring-transparent transition focus:border-[#60a5fa] focus:ring-[#60a5fa] ${className}`}
      {...props}
    />
  </label>
);
