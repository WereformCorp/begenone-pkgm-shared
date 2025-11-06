// packages/begenone-pkgm-shared/src/components/inputs/InputField.jsx
import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { inputStyles } from "../../styles/inputStyles";

export function InputField({
  containerStyles,
  inputWrapperStyles,
  labelStyles,
  customInputStyle,
  customErrorStyle,
  label,
  placeholder,
  error,
  iconLeft,
  iconRight,
  ...props
}) {
  return (
    <View style={[containerStyles]}>
      {label && <Text style={labelStyles}>{label}</Text>}

      <View style={[inputWrapperStyles]}>
        {iconLeft && <View style={inputStyles.icon}>{iconLeft}</View>}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#999"
          style={[customInputStyle]}
          {...props}
        />
        {iconRight && <View style={inputStyles.icon}>{iconRight}</View>}
      </View>

      {error && <Text style={customErrorStyle}>{error}</Text>}
    </View>
  );
}
