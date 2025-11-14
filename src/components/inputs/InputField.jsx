// packages/begenone-pkgm-shared/src/components/inputs/InputField.jsx
import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { inputStyles } from "../../styles/inputStyles";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

export function InputField({
  placeholder,
  error,
  iconLeft,
  iconRight,
  inputStyle,
  inputWrapper,
  multiline,
  onChangeText,
  Children,
  ...props
}) {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null; // or <AppLoading />
  }

  // console.log(`Multi Line CHECK`, multiline);

  const isMultiline = multiline || false;

  return (
    <View>
      <View style={[inputStyles.inputWrapper, inputWrapper]}>
        {iconLeft && <View style={inputStyles.icon}>{iconLeft}</View>}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#999"
          multiline={isMultiline}
          style={[inputStyles.input, inputStyle]}
          onChangeText={onChangeText}
          {...props}
        />
        {iconRight && <View style={inputStyles.icon}>{iconRight}</View>}
      </View>
      {error && <Text style={customErrorStyle}>{error}</Text>}
    </View>
  );
}
