import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "h-12 lg:h-[64px] flex text-primary font-normal uppercase font-messinaSans border border-secondary px-6 py-[17px] lg:py-[22.5px] focus:outline-none focus:border-primary rounded-tr-xl rounded-br-xl w-full text-xs lg:text-base bg-transparent placeholder:text-primary placeholder:opacity-25 disabled:cursor-not-allowed",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
