import { Linking, StyleSheet, useWindowDimensions, View } from "react-native";
import { useMemo } from "react";
import RenderHTML from "react-native-render-html";
import { prepareRichHtmlForMobile } from "../../utils/prepareRichHtmlForMobile";

/**
 * Shared rich text renderer (same pipeline as video description: CustomizedTitle).
 * Decodes entity-encoded markup, sanitizes, then renders with react-native-render-html.
 *
 * @param {Object} props
 * @param {string} [props.rawHtml]
 * @param {string} [props.textColor]
 * @param {number} [props.fontSize]
 * @param {number} [props.lineHeight]
 * @param {boolean} [props.compact] — clip height for list previews (wire cards)
 * @param {number} [props.compactMaxHeight]
 * @param {number} [props.contentWidthOffset] — subtract from window width for padding/margins
 * @param {import('react-native').StyleProp<import('react-native').ViewStyle>} [props.containerStyle]
 */
export function RichHtmlBlock({
  rawHtml,
  textColor = "#fff",
  fontSize = 15,
  lineHeight,
  compact = false,
  compactMaxHeight,
  contentWidthOffset = 64,
  containerStyle,
}) {
  const { width: windowWidth } = useWindowDimensions();
  const contentWidth = Math.max(200, windowWidth - contentWidthOffset);
  const resolvedLineHeight = lineHeight ?? Math.round(fontSize * 1.45);

  const html = useMemo(
    () => prepareRichHtmlForMobile(rawHtml),
    [rawHtml],
  );

  const tagsStyles = useMemo(
    () => ({
      h1: {
        fontSize: fontSize + 7,
        fontWeight: "700",
        marginVertical: 8,
        color: textColor,
      },
      h2: {
        fontSize: fontSize + 5,
        fontWeight: "700",
        marginVertical: 6,
        color: textColor,
      },
      h3: {
        fontSize: fontSize + 3,
        fontWeight: "700",
        marginVertical: 6,
        color: textColor,
      },
      p: { marginVertical: 4 },
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
      pre: {
        marginVertical: 8,
        fontFamily: "monospace",
      },
      code: {
        fontFamily: "monospace",
      },
    }),
    [fontSize, textColor],
  );

  if (!html || !String(html).trim()) {
    return null;
  }

  const maxH =
    compactMaxHeight ??
    (compact ? Math.ceil(resolvedLineHeight * 4.25 + 8) : undefined);

  const inner = (
    <RenderHTML
      contentWidth={contentWidth}
      source={{ html: html || "<p></p>" }}
      baseStyle={StyleSheet.flatten([
        {
          fontSize,
          lineHeight: resolvedLineHeight,
          color: "rgba(255, 255, 255, 0.92)",
        },
      ])}
      tagsStyles={tagsStyles}
      renderersProps={{
        a: {
          onPress: async (_event, href) => {
            try {
              if (href) await Linking.openURL(href);
            } catch (e) {
              console.warn("RichHtmlBlock: open URL failed", e);
            }
          },
        },
      }}
    />
  );

  if (compact && maxH) {
    return (
      <View style={[{ maxHeight: maxH, overflow: "hidden" }, containerStyle]}>
        {inner}
      </View>
    );
  }

  return <View style={containerStyle}>{inner}</View>;
}
