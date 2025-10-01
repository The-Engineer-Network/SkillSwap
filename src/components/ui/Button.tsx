import React from "react";
import {
  TouchableOpacity,
  Text,
  type TouchableOpacityProps,
  ActivityIndicator,
} from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  /**
   * Visual style of the button.
   * - primary: solid purple background with white text
   * - secondary: light background with purple text
   * - tertiary: subtle background with blue text
   */
  variant?: "primary" | "secondary" | "tertiary";

  /** Text label displayed inside the button */
  label: string;

  /** Optional icon component (e.g., from lucide-react-native or react-native-vector-icons) */
  icon?: any;

  /** Where the icon should appear relative to the text (left or right). Default = "left" */
  iconPosition?: "left" | "right";

  /** Show a loading spinner instead of the label/icon */
  isLoading?: boolean;

  /** Color of the loading spinner */
  indicatorColor?: string;
}

/**
 * Reusable Button Component
 *
 * Example usage:
 * 
 * ```tsx
 * <Button
 *   variant="primary"
 *   label="Sign In"
 *   onPress={() => console.log("Pressed")}
 * />
 *
 * <Button
 *   variant="secondary"
 *   label="Continue with Google"
 *   icon={GoogleIcon}
 *   iconPosition="left"
 * />
 *
 * <Button
 *   variant="tertiary"
 *   label="Loading..."
 *   isLoading
 *   indicatorColor="white"
 * />
 * ```
 */
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
      {/* Render left icon or loading spinner */}
      {Icon && iconPosition === "left" ? (
        isLoading ? (
          <ActivityIndicator size="small" color={indicatorColor} />
        ) : (
          <Icon size={20} color={iconColor[variant]} />
        )
      ) : null}

      {/* Render label or spinner if no icon */}
      {isLoading && !Icon ? (
        <ActivityIndicator size="small" color={indicatorColor} />
      ) : (
        <Text
          className={`text-center font-semibold text-base ${textStyles[variant]}`}
        >
          {label}
        </Text>
      )}

      {/* Render right icon if provided */}
      {Icon && iconPosition === "right" && (
        <Icon size={20} color={iconColor[variant]} />
      )}
    </TouchableOpacity>
  );
};

export default Button;
