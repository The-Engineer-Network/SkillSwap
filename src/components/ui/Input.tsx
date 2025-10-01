import React from "react";
import { View, Text, TextInput, type TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

interface InputProps extends TextInputProps {
  /** 
   * Label text shown above the input field
   */
  label: string;

  /** 
   * Optional error message. If provided, input border turns red 
   * and the error text is displayed below the field. 
   */
  error?: string;

  /** 
   * If true, adds a toggle button to show/hide password text.
   * Useful for password fields. 
   */
  showPasswordToggle?: boolean;
}

/**
 * Reusable Input Component
 *
 * Example usage:
 *
 * ```tsx
 * <Input
 *   label="Email"
 *   placeholder="Enter your email"
 *   keyboardType="email-address"
 * />
 *
 * <Input
 *   label="Password"
 *   placeholder="Enter your password"
 *   showPasswordToggle
 *   secureTextEntry
 *   error="Password is required"
 * />
 * ```
 */
export const Input = ({
  label,
  error,
  showPasswordToggle,
  secureTextEntry,
  className = "",
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <View className="space-y-2">
      {/* Label */}
      <Text className="text-gray-700 font-bold text-base mb-1">{label}</Text>

      <View className="relative">
        {/* Main input field */}
        <TextInput
          className={`h-14 px-4 rounded-2xl bg-white text-gray-900 text-base
            ${error ? "border-2 border-red-500" : "border border-gray-200"}
            ${showPasswordToggle ? "pr-12" : ""}
            ${className}`}
          placeholderTextColor="#9CA3AF"
          secureTextEntry={showPasswordToggle ? !showPassword : secureTextEntry}
          {...props}
        />

        {/* Password visibility toggle */}
        {showPasswordToggle && (
          <View
            style={{
              position: "absolute",
              right: 2,
              top: "10%",
              transform: [{ translateY: -12 }],
              padding: 8,
            }}
          >
            <TouchableOpacity
              className="flex flex-row justify-center w-18 mt-4"
              onPress={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <Ionicons name="eye-off-outline" size={24} color="#6B7280" />
              ) : (
                <Ionicons name="eye-outline" size={24} color="#6B7280" />
              )}
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Error message */}
      {error && <Text className="text-red-500 text-sm">{error}</Text>}
    </View>
  );
};
