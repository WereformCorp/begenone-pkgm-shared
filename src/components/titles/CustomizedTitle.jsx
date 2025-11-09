import { Text, View } from "react-native";

export function CustomizedTitle({
  title,
  fontSize,
  fontFamily,
  textColor,
  style,
}) {
  const displayTitle =
    title && title.length > 75
      ? title.slice(0, 75) + "…" // adds an ellipsis when truncated
      : title || "Here is your default Title!";

  return (
    <View style={[style, { width: "auto" }]}>
      <Text
        style={{ fontFamily: fontFamily, fontSize: fontSize, color: textColor }}
      >
        {displayTitle}
      </Text>
    </View>
  );
}
