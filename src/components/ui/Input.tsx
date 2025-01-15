import { twMerge } from "tailwind-merge";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

const inputStyles = {
  base: "px-4 py-3 rounded-lg bg-black/5 border-0 focus:ring-2 focus:ring-[rgb(226,34,40)] transition-all duration-300",
  fullWidth: "w-full",
  error: "ring-2 ring-red-500",
  label: "block text-sm text-black/60 mb-2",
  errorText: "text-sm text-red-500 mt-1",
};

export const Input = ({
  label,
  error,
  fullWidth,
  className,
  ...props
}: InputProps) => {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && <label className={inputStyles.label}>{label}</label>}
      <input
        className={twMerge(
          inputStyles.base,
          fullWidth && inputStyles.fullWidth,
          error && inputStyles.error,
          className
        )}
        {...props}
      />
      {error && <p className={inputStyles.errorText}>{error}</p>}
    </div>
  );
};
