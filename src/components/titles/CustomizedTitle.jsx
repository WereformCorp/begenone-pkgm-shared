import {
  Linking,
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useMemo, useState } from "react";
import RenderHTML from "react-native-render-html";
import { CustomizedTitleStyles } from "../../styles/CustomizedTitleStyles";
import { prepareRichHtmlForMobile } from "../../utils/prepareRichHtmlForMobile";

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
  const { width: windowWidth } = useWindowDimensions();
  const displayTitle = title || "Untitled";
  const displayDescription =
    description || "Watch to discover more about this video and the creator.";
  const hasDescription = true;

  const descriptionHtml = useMemo(
    () => prepareRichHtmlForMobile(displayDescription),
    [displayDescription],
  );

  const htmlContentWidth = Math.max(200, windowWidth - 80);

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
          <RenderHTML
            contentWidth={htmlContentWidth}
            source={{ html: descriptionHtml || "<p></p>" }}
            baseStyle={StyleSheet.flatten([
              CustomizedTitleStyles.descriptionText,
              { fontFamily, color: "rgba(255, 255, 255, 0.92)" },
            ])}
            tagsStyles={{
              h1: {
                fontSize: 22,
                fontWeight: "700",
                marginVertical: 8,
                color: textColor,
              },
              h2: {
                fontSize: 20,
                fontWeight: "700",
                marginVertical: 6,
                color: textColor,
              },
              h3: {
                fontSize: 18,
                fontWeight: "700",
                marginVertical: 6,
                color: textColor,
              },
              p: { marginVertical: 6 },
              ul: { marginVertical: 6, paddingLeft: 18 },
              ol: { marginVertical: 6, paddingLeft: 18 },
              li: { marginVertical: 2 },
              a: { color: "#ff6000", textDecorationLine: "underline" },
              blockquote: {
                marginVertical: 8,
                paddingLeft: 12,
                borderLeftWidth: 3,
                borderLeftColor: "rgba(255, 255, 255, 0.25)",
              },
            }}
            renderersProps={{
              a: {
                onPress: async (_event, href) => {
                  try {
                    if (href) await Linking.openURL(href);
                  } catch (e) {
                    console.warn("CustomizedTitle: open URL failed", e);
                  }
                },
              },
            }}
          />
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
