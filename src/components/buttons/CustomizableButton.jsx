import { Text, TouchableOpacity } from "react-native";
import { customizableButtonStyles } from "../../styles/customizableButtonStyles";

export function CustomizedButton({
  label,
  onPress,
  textColor,
  fontSize,
  fontFamily,
  fontWeight,
  style,
}) {
  if (!label) {
    console.warn("CustomizedButton: 'label' prop is missing.");
  }

  return (
    <TouchableOpacity
      onPress={
        onPress ||
        (() => console.warn("CustomizedButton: onPress not provided"))
      }
      style={[customizableButtonStyles.buttonContainer, style]}
      activeOpacity={0.8}
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
    </TouchableOpacity>
  );
}
