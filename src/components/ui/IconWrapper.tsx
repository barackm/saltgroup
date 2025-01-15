import { twMerge } from "tailwind-merge";

interface IconWrapperProps {
  icon: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const iconStyles = {
  base: "rounded-full flex items-center justify-center",
  variant: {
    primary: "bg-[rgb(226,34,40)]/10 text-[rgb(226,34,40)]",
    secondary: "bg-gray-50 shadow-sm text-gray-600",
    ghost: "bg-white/10 backdrop-blur-md text-white",
  },
  size: {
    sm: "p-2",
    md: "p-2.5",
    lg: "p-3",
  },
};

export const IconWrapper = ({
  icon,
  variant = "primary",
  size = "md",
  className,
}: IconWrapperProps) => {
  return (
    <div
      className={twMerge(
        iconStyles.base,
        iconStyles.variant[variant],
        iconStyles.size[size],
        className
      )}
    >
      {icon}
    </div>
  );
};
