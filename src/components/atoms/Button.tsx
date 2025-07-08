import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  outline?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  outline = false,
  className, 
  children, 
  ...props 
}) => {
  const baseStyles = 'rounded-md font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const variantStyles = {
    primary: outline
      ? 'border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:ring-primary-500'
      : 'bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500',
    secondary: outline
      ? 'border-2 border-neutral-500 text-neutral-500 hover:bg-neutral-50 focus:ring-neutral-500'
      : 'bg-neutral-500 text-white hover:bg-neutral-600 focus:ring-neutral-500',
    success: outline
      ? 'border-2 border-feedback-success text-feedback-success hover:bg-green-50 focus:ring-feedback-success'
      : 'bg-feedback-success text-white hover:bg-green-600 focus:ring-feedback-success',
    warning: outline
      ? 'border-2 border-feedback-warning text-feedback-warning hover:bg-yellow-50 focus:ring-feedback-warning'
      : 'bg-feedback-warning text-neutral-900 hover:bg-yellow-500 focus:ring-feedback-warning',
    error: outline
      ? 'border-2 border-feedback-error text-feedback-error hover:bg-red-50 focus:ring-feedback-error'
      : 'bg-feedback-error text-white hover:bg-red-600 focus:ring-feedback-error',
    info: outline
      ? 'border-2 border-feedback-info text-feedback-info hover:bg-blue-50 focus:ring-feedback-info'
      : 'bg-feedback-info text-white hover:bg-blue-600 focus:ring-feedback-info',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;