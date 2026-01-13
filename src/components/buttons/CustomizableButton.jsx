import { Text, TouchableOpacity, View } from "react-native";
import { customizableButtonStyles } from "../../styles/customizableButtonStyles";
import { useState } from "react";

/**
 * CustomizedButton
 *
 * A reusable, press-aware button component with optional icon support.
 * Handles pressed state styling and basic prop validation.
 *
 * Props:
 * - label: string (button text)
 * - onPress: function (callback when pressed)
 * - onPressStyle: style applied while pressed
 * - textColor, fontSize, fontFamily, fontWeight: text customization
 * - customIcon: optional icon rendered on the right
 * - style: container style overrides
 * - isDisabled: disables interaction
 */

export function CustomizedButton({
  label,
  onPress,
  onPressStyle,
  textColor,
  fontSize,
  fontFamily,
  fontWeight,
  customIcon,
  style,
  isDisabled,
}) {
  if (!label) {
    console.warn("CustomizedButton: 'label' prop is missing.");
  }

  const [pressed, setPressed] = useState(false);

  return (
    <TouchableOpacity
      onPress={
        onPress ||
        (() => console.warn("CustomizedButton: onPress not provided"))
      }
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      style={[
        customizableButtonStyles.buttonContainer,
        style,
        pressed && onPressStyle,
      ]}
      activeOpacity={1}
      disabled={isDisabled}
    >
      <View
        style={
          customIcon
            ? {
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                paddingRight: 12,
              }
            : {}
        }
      >
        <Text
          style={[
            customizableButtonStyles.buttonText,
            {
              color: textColor || "#fff",
              fontSize: fontSize || 16,
              fontFamily: fontFamily,
              fontWeight: fontWeight,
            },
          ]}
        >
          {label || "Default Button"}
        </Text>
        <View>{customIcon && customIcon}</View>
      </View>
    </TouchableOpacity>
  );
}
