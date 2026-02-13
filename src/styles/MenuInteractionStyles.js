import { StyleSheet } from "react-native";

const ICON_BOX_SIZE = 48;

/* Interaction bar styles - modern, equal-height, reactive */
export const MenuInteractionStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
    paddingVertical: 8,
    paddingRight: 8,
  },

  scrollRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 12,
  },

  column_mainIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },

  icon: {
    width: ICON_BOX_SIZE,
    height: ICON_BOX_SIZE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(35, 30, 28, 0.95)",
    borderRadius: 12,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  /* Like/dislike chips - compact, equal height, distinct states */
  engagementChip: {
    height: ICON_BOX_SIZE,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 12,
    gap: 6,
    minWidth: ICON_BOX_SIZE,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },

  engagementChipNeutral: {
    backgroundColor: "rgba(35, 30, 28, 0.95)",
  },

  engagementChipLiked: {
    backgroundColor: "rgba(59, 130, 246, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(59, 130, 246, 0.5)",
  },

  engagementChipDisliked: {
    backgroundColor: "rgba(255, 94, 0, 0.2)",
    borderWidth: 1,
    borderColor: "rgba(255, 94, 0, 0.5)",
  },

  countText: {
    color: "rgba(255, 255, 255, 0.95)",
    fontSize: 13,
    fontWeight: "600",
  },

  iconText: {
    color: "rgba(255, 255, 255, 0.95)",
    fontSize: 13,
    fontWeight: "600",
  },

  menu: {
    position: "absolute",
    top: 32,
    right: 0,
    backgroundColor: "rgba(26, 24, 22, 0.98)",
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    minWidth: 120,
    overflow: "hidden",

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },

  deleteText: {
    color: "#ff4d4f",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },

  /* Minimal variant – no borders, no shadows, light feedback */
  iconMinimal: {
    width: 40,
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },

  chipMinimal: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 8,
    gap: 6,
    minWidth: 40,
    backgroundColor: "transparent",
  },

  chipNeutralMinimal: {
    backgroundColor: "transparent",
  },

  chipLikedMinimal: {
    backgroundColor: "transparent",
  },

  chipDislikedMinimal: {
    backgroundColor: "transparent",
  },
});
