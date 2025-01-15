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
}

const buttonStyles = {
  base: "rounded-full font-medium transition-all duration-300 flex items-center justify-center gap-2",
  variant: {
    primary:
      "bg-[rgb(226,34,40)] text-white hover:bg-[rgb(200,30,35)] shadow-lg hover:shadow-xl hover:shadow-[rgb(226,34,40)]/20",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10",
    outline:
      "bg-transparent border border-gray-200 text-gray-700 hover:bg-gray-50",
    ghost: "bg-transparent text-gray-700 hover:bg-gray-50",
  },
  size: {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  },
  fullWidth: "w-full",
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
}: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={twMerge(
        buttonStyles.base,
        buttonStyles.variant[variant],
        buttonStyles.size[size],
        fullWidth && buttonStyles.fullWidth,
        className
      )}
      onClick={onClick}
      disabled={isLoading}
    >
      {icon && icon}
      {isLoading ? "Loading..." : children}
    </motion.button>
  );
};
