import React from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  showErrorOnField?: boolean;
  hideLabel?: boolean;
  parentClassName?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    label,
    error,
    className,
    parentClassName,
    leftElement,
    rightElement,
    showErrorOnField,
    hideLabel,
    ...rest
  } = props;

  const focusClass = `focus-within:ring-2 ${
    error ? 'focus-within:ring-danger' : 'focus-within:ring-primary'
  }`;

  return (
    <div className="flex flex-col gap-2" aria-label={`input-container-${props?.name}`}>
      {!hideLabel && <span className="tracking-wide text-sm">{label}</span>}

      <div
        className={cn(
          `text-foreground/80 relative flex items-center gap-2 p-2 overflow-hidden rounded-md border bg-white transition-[border-color,box-shadow] duration-300 ${focusClass}`,
          parentClassName
        )}>
        {leftElement}
        <input
          ref={ref}
          className={cn(
            `placeholder:text-primary-2/30 w-full bg-transparent pl-1.5 py-1 text-sm text-inherit focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50`,
            className
          )}
          {...rest}
        />
        {rightElement && (
          <div aria-label="right-element-container" className="text-inherit">
            {rightElement}
          </div>
        )}
      </div>

      {showErrorOnField && <span className="text-danger ml-2 text-xs">{error}</span>}
    </div>
  );
});
Input.displayName = 'Input';

export { Input, type InputProps };
