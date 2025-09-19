import React from "react";

interface CardProps {
  /**
   * Card title
   */
  title?: string;
  /**
   * Card content
   */
  children: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Card variant
   */
  variant?: "default" | "outlined" | "elevated";
}

export const Card: React.FC<CardProps> = ({
  title,
  children,
  onClick,
  variant = "default",
}) => {
  const variantClasses = {
    default: "bg-white border border-gray-200",
    outlined: "bg-transparent border-2 border-gray-300",
    elevated: "bg-white shadow-lg border-0",
  };

  return (
    <div
      className={[
        "rounded-lg p-6 transition-all duration-200",
        variantClasses[variant],
        onClick ? "cursor-pointer hover:shadow-md" : "",
      ].join(" ")}
      onClick={onClick}
    >
      {title && (
        <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      )}
      <div className="text-gray-700">{children}</div>
    </div>
  );
};
