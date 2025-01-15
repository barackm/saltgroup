import { twMerge } from "tailwind-merge";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  type?: "text" | "email" | "select" | "phone";
  options?: { value: string; label: string }[];
  onPhoneChange?: (phone: string) => void;
}

const inputStyles = {
  base: "px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[rgb(226,34,40)] focus:border-transparent transition-all duration-300 text-gray-900 placeholder:text-gray-400",
  fullWidth: "w-full",
  error: "ring-2 ring-red-500",
  label: "block text-sm font-medium text-gray-700 mb-1",
  errorText: "text-sm text-red-500 mt-1",
};

export const Input = ({
  label,
  error,
  fullWidth,
  className,
  type = "text",
  options,
  onPhoneChange,
  ...props
}: InputProps) => {
  return (
    <div className={fullWidth ? "w-full" : ""}>
      {label && <label className={inputStyles.label}>{label}</label>}

      {type === "select" ? (
        <select
          className={twMerge(
            inputStyles.base,
            fullWidth && inputStyles.fullWidth,
            error && inputStyles.error,
            className
          )}
          {...props}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === "phone" ? (
        <div className="relative">
          <PhoneInput
            country="cd"
            onChange={onPhoneChange}
            containerClass="!w-full"
            inputClass={twMerge(
              inputStyles.base,
              "!w-full !h-10 !text-gray-900",
              error && inputStyles.error,
              className
            )}
            buttonClass="!border-gray-300 !rounded-l-lg"
            dropdownClass="!fixed !w-[300px] !shadow-lg !bg-white !border-gray-200"
          />
        </div>
      ) : (
        <input
          className={twMerge(
            inputStyles.base,
            fullWidth && inputStyles.fullWidth,
            error && inputStyles.error,
            className
          )}
          type={type}
          {...props}
        />
      )}

      {error && <p className={inputStyles.errorText}>{error}</p>}
    </div>
  );
};
