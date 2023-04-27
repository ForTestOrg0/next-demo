import { forwardRef, DetailedHTMLProps, ButtonHTMLAttributes } from "react";

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, Props>(({ children, className, ...rest }, ref) => {
  return (
    <button
      {...rest}
      ref={ref}
      className={`bg-transparent focus:outline-none focus-visible:outline-none transition-colors duration-150 ${className}`}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
