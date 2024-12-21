import React, { ReactNode } from "react";
import { cn } from "../../libs/utils";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "tertiary";
};

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  className = "",
  icon,
  iconPosition = "left",
  variant = "primary",
}) => {
  
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-md py-3 px-6 text-xl transition-all duration-300";
  const variantStyles = {
    primary: "bg-primary-900 text-white hover:bg-primary-950",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200",
    tertiary: "bg-transparent text-white hover:underline",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={cn(
        baseStyles,
        variantStyles[variant],
        disabled || loading ? "opacity-50 cursor-not-allowed" : "",
        className
      )}
    >
      {loading ? (
        <span className="flex items-center">
          <svg
            className="animate-spin h-5 w-5 mr-2 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C6.477 0 2 4.477 2 10h2zm2 5.291A7.964 7.964 0 014 12H0c0 3.866 2.79 7.093 6.432 7.793l-.432-2.502z"
            />
          </svg>
          Loading...
        </span>
      ) : (
        <>
          {icon && iconPosition === "left" && (
            <span className="mr-2">{icon}</span>
          )}
          <span>{text}</span>
          {icon && iconPosition === "right" && (
            <span className="ml-2">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};

export default Button;
