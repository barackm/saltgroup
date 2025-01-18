import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

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
  textClassName?: string;
  type?: "button" | "submit" | "reset";
}

const buttonStyles = {
  base: "rounded-full font-bold flex items-center justify-center gap-1.5 sm:gap-2 text-xl sm:text-2xl relative overflow-hidden isolate focus:outline-none",
  variant: {
    primary:
      "bg-[rgb(120,10,15)] shadow-md hover:shadow-lg border border-[rgb(226,34,40)]/20 backdrop-blur-sm [&>span]:text-white [&>span]:relative [&>span]:z-[60] after:absolute after:inset-0 after:-z-10 after:bg-[rgb(120,10,15)]/30",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm border border-white/10",
    outline:
      "border border-gray-200 text-gray-700 hover:bg-gray-50 hover:border-gray-300 bg-white",
    ghost: "text-gray-700 hover:bg-gray-50",
  },
  size: {
    sm: "px-5 py-2 sm:px-6 sm:py-2.5",
    md: "px-6 py-2.5 sm:px-8 sm:py-3",
    lg: "px-8 py-3 sm:px-10 sm:py-3.5",
  },
  fullWidth: "w-full",
  disabled: "opacity-50 cursor-not-allowed",
};

export const FancyButton = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth,
  icon,
  isLoading,
  className,
  onClick,
  disabled,
  type = "button",
  textClassName,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type}
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
      {variant === "primary" && (
        <Image
          src="/images/pattern_1-min-btn.png"
          alt=""
          width={200}
          height={200}
          className="absolute inset-0 w-full h-full object-cover opacity-50 mix-blend-luminosity scale-[2] sm:scale-[3] z-20"
          priority={false}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}

      {icon && <span className="w-3.5 h-3.5 sm:w-4 sm:h-4">{icon}</span>}
      <span
        className={twMerge(
          "text-white font-extrabold [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]",
          textClassName
        )}
      >
        {isLoading ? "Loading..." : children}
      </span>
    </button>
  );
};
