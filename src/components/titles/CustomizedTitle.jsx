import { Text, View } from "react-native";

export function CustomizedTitle({
  title,
  fontSize,
  fontFamily,
  textColor,
  style,
  textStyle,
  dateTextStyles,
}) {
  const displayTitle =
    title && title.length > 75
      ? title.slice(0, 75) + "…" // adds an ellipsis when truncated
      : title || "Here is your default Title!";

  return (
    <View style={[{ width: "100%" }, style]}>
      <Text
        style={[
          {
            flexShrink: 1,
            fontFamily: fontFamily,
            fontSize: fontSize,
            color: textColor,
            flexWrap: "wrap",
          },
          textStyle,
        ]}
        numberOfLines={2}
      >
        {displayTitle}
      </Text>
    </View>
  );
}
