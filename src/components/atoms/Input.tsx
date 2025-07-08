import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  label?: string;
  helperText?: string;
}

const Input: React.FC<InputProps> = ({ 
  variant = 'default',
  size = 'md',
  label,
  helperText,
  className, 
  ...props 
}) => {
  const baseStyles = 'border rounded-md focus:outline-none focus:ring-2 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeStyles = {
    sm: 'px-2 py-1 text-sm',
    md: 'px-3 py-2 text-base',
    lg: 'px-4 py-3 text-lg',
  };

  const variantStyles = {
    default: 'border-neutral-300 focus:border-primary-500 focus:ring-primary-500',
    success: 'border-feedback-success focus:border-feedback-success focus:ring-feedback-success',
    warning: 'border-feedback-warning focus:border-feedback-warning focus:ring-feedback-warning',
    error: 'border-feedback-error focus:border-feedback-error focus:ring-feedback-error',
  };

  const helperTextStyles = {
    default: 'text-neutral-600',
    success: 'text-feedback-success',
    warning: 'text-feedback-warning',
    error: 'text-feedback-error',
  };

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-neutral-700 mb-1">
          {label}
        </label>
      )}
      <input
        className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
        {...props}
      />
      {helperText && (
        <p className={`mt-1 text-sm ${helperTextStyles[variant]}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;