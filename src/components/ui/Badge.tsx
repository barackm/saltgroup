import { twMerge } from "tailwind-merge";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  withAnimation?: boolean;
  className?: string;
}

const badgeStyles = {
  base: "inline-block rounded-full text-xs sm:text-sm font-medium transition-all duration-300",
  variant: {
    primary:
      "px-2.5 py-1 sm:px-4 sm:py-2 bg-[rgb(226,34,40)] text-white shadow-lg",
    secondary:
      "px-2.5 py-1 sm:px-4 sm:py-2 bg-black/80 backdrop-blur-md text-white shadow-lg",
    outline:
      "px-2.5 py-1 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm text-white/90 border border-white/10",
  },
};

export const Badge = ({
  children,
  variant = "primary",
  className,
}: BadgeProps) => {
  return (
    <span
      className={twMerge(
        badgeStyles.base,
        badgeStyles.variant[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
