import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", fullWidth = false, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "px-4 py-2 rounded-[50px] font-bold transition-colors",
          {
            "bg-[rgba(35,164,222,1)] text-white hover:bg-[rgba(35,164,222,0.9)]":
              variant === "primary",
            "bg-[rgba(51,222,179,1)] text-[rgba(42,42,42,1)] hover:bg-[rgba(51,222,179,0.9)]":
              variant === "secondary",
            "border border-[rgba(42,42,42,1)] text-[rgba(42,42,42,1)] hover:bg-gray-50":
              variant === "outline",
          },
          fullWidth && "w-full",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export default Button;
