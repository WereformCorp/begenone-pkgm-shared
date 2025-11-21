// packages/begenone-pkgm-shared/src/components/inputs/InputField.jsx
import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { inputStyles } from "../../styles/inputStyles";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Ionicons } from "@expo/vector-icons";

export function InputField({
  placeholder,
  error,
  iconLeft,
  iconRight,
  iconRightColor,
  inputStyle,
  inputWrapper,
  multiline,
  onChangeText,
  Children,
  // onPressFunction,
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
          style={[
            inputStyles.input,
            inputStyle,
            isMultiline && { textAlignVertical: "top" },
          ]}
          onChangeText={onChangeText}
          {...props}
        />
        {iconRight && (
          <View style={inputStyles.icon}>
            <Ionicons
              name={iconRight}
              size={18}
              color={iconRightColor || "#fff"}
            />
          </View>
        )}
      </View>
      {error && <Text style={customErrorStyle}>{error}</Text>}
    </View>
  );
}
// ~2.28.0
// ~4.16.0
