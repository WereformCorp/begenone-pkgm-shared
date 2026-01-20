import { Text, View } from "react-native";

/**
 * CustomizedTitle
 *
 * Reusable title-rendering component with built-in truncation
 * and flexible typography control.
 *
 * Behavior:
 * - Automatically truncates long titles to 75 characters
 * - Appends an ellipsis (…) when truncation occurs
 * - Falls back to a default title when no title is provided
 * - Limits rendering to two lines for layout stability
 *
 * Props:
 * - title: string (raw title text)
 * - fontSize: number (text size override)
 * - fontFamily: string (font family override)
 * - textColor: string (text color override)
 * - style: ViewStyle (outer container style override)
 * - textStyle: TextStyle (text style override)
 * - dateTextStyles: reserved for future extensions
 *
 * Notes:
 * - Designed for feed cards, headers, and compact layouts
 * - Uses flexShrink and wrapping to avoid layout overflow
 */

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
