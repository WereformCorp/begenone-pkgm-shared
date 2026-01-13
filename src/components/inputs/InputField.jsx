// packages/begenone-pkgm-shared/src/components/inputs/InputField.jsx
import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { inputStyles } from "../../styles/inputStyles";
import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { Ionicons } from "@expo/vector-icons";

/**
 * InputField
 *
 * Fully featured, reusable input component with:
 * - optional left/right icons
 * - error display
 * - secure text support
 * - multiline handling
 * - Expo font loading (Inter)
 *
 * Props:
 * - placeholder: string
 * - error: validation error message
 * - iconLeft: ReactNode
 * - iconRight: Ionicons name
 * - onIconPress: callback for right icon
 * - iconRightColor: color override
 * - inputStyle, inputWrapper: style overrides
 * - multiline: boolean
 * - onChangeText: input handler
 * - isEditable: toggle input editability
 * - secureTextEntry: password mode
 *
 * Notes:
 * - Font loading is required before render
 * - Multiline inputs adjust vertical alignment automatically
 */

export function InputField({
  placeholder,
  error,
  iconLeft,
  iconRight,
  onIconPress,
  iconRightColor,
  inputStyle,
  inputWrapper,
  multiline,
  onChangeText,
  isEditable,
  secureTextEntry,
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
          editable={isEditable}
          placeholder={placeholder}
          placeholderTextColor="#999"
          multiline={isMultiline}
          style={[
            inputStyles.input,
            inputStyle,
            isMultiline && { textAlignVertical: "top" },
          ]}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          {...props}
        />
        {iconRight && (
          <TouchableOpacity
            style={inputStyles.icon}
            onPress={onIconPress}
            disabled={!onIconPress}
          >
            <Ionicons
              name={iconRight}
              size={18}
              color={iconRightColor || "#fff"}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={customErrorStyle}>{error}</Text>}
    </View>
  );
}
// ~2.28.0
// ~4.16.0
