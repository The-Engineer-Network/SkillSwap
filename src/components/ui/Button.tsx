import {
  TouchableOpacity,
  Text,
  type TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";
import React from "react";

interface ButtonProps extends TouchableOpacityProps {
  variant?: "primary" | "secondary" | "tertiary";
  label: string;
  icon?: any;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  indicatorColor?: string;
}

const Button = ({
  variant = "primary",
  label,
  icon: Icon,
  iconPosition = "left",
  className = "",
  isLoading = false,
  indicatorColor = "blue",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "w-full py-4 rounded-2xl flex-row items-center justify-center space-x-2";
  const variantStyles = {
    primary: "bg-[#7f13ec] active:bg-indigo-700",
    secondary: "bg-[#dec8f5] border border-gray-300 active:bg-gray-50",
    tertiary: "bg-[#EBEDFA] active:bg-[#E7F1FE]",
  };

  const textStyles = {
    primary: "text-white",
    secondary: "text-[#7f13ec]",
    tertiary: "text-[#3947CB]",
  };

  const iconColor = {
    primary: "#FFFFFF",
    secondary: "#3947CB",
    tertiary: "#3947CB",
  };

  return (
    <TouchableOpacity
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === "left" ? (
        isLoading ? (
          <ActivityIndicator size="small" color={indicatorColor} />
        ) : (
          <Icon size={20} color={iconColor[variant]} />
        )
      ) : null}

      {isLoading && !Icon ? (
        <ActivityIndicator size="small" color={indicatorColor} />
      ) : (
        <Text
          className={`text-center font-semibold text-base ${textStyles[variant]}`}
        >
          {label}
        </Text>
      )}

      {Icon && iconPosition === "right" && (
        <Icon size={20} color={iconColor[variant]} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
