import { Text, TouchableOpacity, View } from "react-native";
import { customizableButtonStyles } from "../../styles/customizableButtonStyles";
import { useState } from "react";

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
