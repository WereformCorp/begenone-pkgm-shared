import { StyleSheet } from "react-native";

/* CustomizedTitle styles - modern, minimalist, bold */
export const CustomizedTitleStyles = StyleSheet.create({
  container: {
    width: "100%",
  },

  title: {
    fontWeight: "700",
    letterSpacing: 0.3,
    flexShrink: 1,
  },

  dotsContainer: {
    marginTop: 6,
    alignSelf: "flex-start",
    opacity: 0.6,
  },

  description: {
    marginTop: 14,
    backgroundColor: "rgba(20, 20, 24, 0.98)",
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 18,
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.06)",
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 4,
  },

  descriptionText: {
    fontSize: 15,
    lineHeight: 22,
    color: "rgba(255, 255, 255, 0.92)",
  },

  showLess: {
    marginTop: 16,
    paddingVertical: 6,
    paddingRight: 4,
    alignSelf: "flex-start",
  },

  showLessText: {
    fontSize: 14,
    color: "rgba(255, 255, 255, 0.7)",
    fontWeight: "600",
  },
});
