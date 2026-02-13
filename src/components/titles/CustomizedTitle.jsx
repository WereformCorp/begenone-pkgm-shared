import { Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { CustomizedTitleStyles } from "../../styles/CustomizedTitleStyles";

/**
 * CustomizedTitle
 *
 * Modern, minimalist, bold title for Begenone.
 * Max 2 lines; 3-dot icon underneath when description exists.
 * Tap title/dots to expand description; "Show less" to collapse.
 * Description uses a card-style container inspired by YouTube/Medium dark UIs.
 *
 * Props:
 * - title: string (raw title text)
 * - description: string (optional; expandable content)
 * - fontSize: number (text size override)
 * - fontFamily: string (font family override)
 * - textColor: string (text color override)
 * - style: ViewStyle (outer container style override)
 * - textStyle: TextStyle (text style override)
 */

export function CustomizedTitle({
  title,
  description,
  fontSize = 18,
  fontFamily = "System",
  textColor = "#fff",
  style,
  textStyle,
}) {
  const [expanded, setExpanded] = useState(false);
  const displayTitle = title || "Untitled";
  const displayDescription =
    description || "Watch to discover more about this video and the creator.";
  const hasDescription = true;

  return (
    <View style={[CustomizedTitleStyles.container, style]}>
      <Pressable
        onPress={() => hasDescription && setExpanded(true)}
        style={({ pressed }) => [
          hasDescription && { opacity: pressed ? 0.8 : 1 },
        ]}
      >
        <Text
          style={[
            CustomizedTitleStyles.title,
            {
              fontFamily,
              fontSize,
              color: textColor,
              lineHeight: fontSize * 1.35,
            },
            textStyle,
          ]}
          numberOfLines={2}
          ellipsizeMode="tail"
        >
          {displayTitle}
        </Text>
        {hasDescription && (
          <View style={CustomizedTitleStyles.dotsContainer}>
            <Ionicons name="ellipsis-horizontal" size={20} color={textColor} />
          </View>
        )}
      </Pressable>

      {hasDescription && expanded && (
        <View style={CustomizedTitleStyles.description}>
          <Text style={[CustomizedTitleStyles.descriptionText, { fontFamily }]}>
            {displayDescription}
          </Text>
          <Pressable
            onPress={() => setExpanded(false)}
            style={({ pressed }) => [
              CustomizedTitleStyles.showLess,
              { opacity: pressed ? 0.7 : 1 },
            ]}
          >
            <Text style={CustomizedTitleStyles.showLessText}>Show less</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
