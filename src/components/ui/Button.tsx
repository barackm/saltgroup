import { motion } from "framer-motion";
import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  icon?: ReactNode;
  isLoading?: boolean;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const buttonStyles = {
  base: "rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-1.5 sm:gap-2 text-sm",
  variant: {
    primary:
      "bg-[rgb(226,34,40)] text-white hover:bg-[rgb(200,30,35)] shadow-lg hover:shadow-xl hover:shadow-[rgb(226,34,40)]/20",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10",
    outline:
      "border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 bg-white",
    ghost: "text-gray-700 hover:bg-gray-50",
  },
  size: {
    sm: "px-3 py-1.5 sm:px-3 sm:py-1.5",
    md: "px-4 py-2 sm:px-4 sm:py-2",
    lg: "px-5 py-2.5 sm:px-6 sm:py-2.5",
  },
  fullWidth: "w-full",
  disabled: "opacity-50 cursor-not-allowed",
};

export const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth,
  icon,
  isLoading,
  className,
  onClick,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={twMerge(
        buttonStyles.base,
        buttonStyles.variant[variant],
        buttonStyles.size[size],
        fullWidth && buttonStyles.fullWidth,
        disabled && buttonStyles.disabled,
        className
      )}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...props}
    >
      {icon && <span className="w-3.5 h-3.5 sm:w-4 sm:h-4">{icon}</span>}
      {isLoading ? "Loading..." : children}
    </motion.button>
  );
};
