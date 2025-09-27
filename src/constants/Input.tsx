import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Input = (title: string, style, onChange) => {
  <TextInput
    placeholder={title}
    style={[styles.textInput, style]}
    onChange={onChange}
  />;
};

const styles = StyleSheet.create({
  textInput: {
    height: 48,
    borderRadius: 10,
    paddingHorizontal: 16,
    color: "#565D6D",
    borderWidth: 1,
    borderColor: "#DEE1E6",
  },
});
export default Input;
