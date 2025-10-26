import React, { forwardRef } from 'react';

type Props = {
  id?: string;
  name?: string;
  label?: string;
  value?: string | number;
  placeholder?: string;
  type?: string;
  error?: string | null;
  className?: string; // applied to the actual input/textarea
  wrapperClassName?: string; // optional class for the outer wrapper
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  rightIcon?: React.ReactNode;
  textarea?: boolean;
  rows?: number;
  compactOnMobile?: boolean; // when true, applies smaller vertical padding on <md>
};

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props & Record<string, any>>((props, ref) => {
  const {
    id,
    name,
    label,
    value,
    placeholder,
    type = 'text',
    error = null,
    className = '',
    wrapperClassName = '',
    onChange,
    rightIcon,
    textarea = false,
    rows = 3,
    compactOnMobile = true,
    ...restProps
  } = props as any;

  const baseClasses = `w-full border rounded-lg px-3 transition focus:outline-none focus:ring-2 focus:ring-[#CB1B1B] ${
    compactOnMobile ? 'py-2 md:py-3' : 'py-3'
  }`;

  return (
    <div className={`w-full flex flex-col ${wrapperClassName}`}>
      {label && (
        <label htmlFor={id || name} className="text-sm text-gray-700 mb-1">
          {label}
        </label>
      )}

      <div className="relative">
        {textarea ? (
          <textarea
            id={id}
            name={name}
            ref={ref as React.Ref<HTMLTextAreaElement>}
            rows={rows}
            placeholder={placeholder}
            {...(value !== undefined ? { value: (value as string) } : {})}
            {...restProps}
            className={`${baseClasses} pr-10 border-gray-300 ${className}`}
          />
        ) : (
          <input
            id={id}
            name={name}
            ref={ref as React.Ref<HTMLInputElement>}
            type={type}
            placeholder={placeholder}
            {...(value !== undefined ? { value: (value as string | number) } : {})}
            {...restProps}
            className={`${baseClasses} pr-10 border-gray-300 ${className}`}
          />
        )}

        {rightIcon && (
          <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
            {rightIcon}
          </div>
        )}
      </div>

      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;