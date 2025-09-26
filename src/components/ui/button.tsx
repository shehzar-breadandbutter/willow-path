import React from 'react';
import { cn } from '@/lib/utils';
import { Slot, Slottable } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'cursor-pointer inline-flex items-center justify-center gap-4 whitespace-nowrap transition-colors focus-visible:outline-none disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'border-primary bg-primary hover:bg-primary/90 disabled:text-white/70 text-white border',
        secondary: 'bg-secondary hover:bg-secondary/90 text-white disabled:text-white/70',
        neutral: 'bg-background text-foreground hover:bg-background/95 disabled:text-foreground/70',
        outline_primary:
          'border-primary text-primary hover:bg-primary/10 disabled:text-primary/70 border bg-transparent'
      },
      size: {
        xs: 'rounded-sm px-4 py-2 text-xs shadow-xs',
        sm: 'rounded-sm px-5 py-3 text-sm shadow-xs',
        md: 'text-lg tracking-wide leading-[130%] rounded-md px-6 py-3 shadow-sm',
        lg: 'rounded-xl px-8 py-4 text-lg shadow-sm',
        icon: 'size-10 rounded-full'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    className,
    variant,
    size,
    children,
    asChild = false,
    isLoading = false,
    loadingText = 'Loading...',
    disabled = false,
    leftElement,
    rightElement,
    ...rest
  } = props;

  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      ref={ref}
      role="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading ? isLoading : disabled}
      {...rest}>
      {leftElement}
      <Slottable>{isLoading ? loadingText : children}</Slottable>
      {rightElement}
    </Comp>
  );
});
Button.displayName = 'Button';

export { Button, buttonVariants };
