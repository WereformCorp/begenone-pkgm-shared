import { StyleSheet } from "react-native";

/* Interaction bar styles for menu actions */
export const MenuInteractionStyles = StyleSheet.create({
  container: {
    // Interaction bar container
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: 16,
  },

  column_mainIcons: {
    // Primary interaction icons row
    flexDirection: "row",
    justifyContent: "space-evenly",
  },

  icon: {
    display: "flex",
    flexDirection: "row",
    // Individual icon spacing
    backgroundColor: "#242424",

    margin: 2,
    padding: 8,
    borderRadius: 10,
  },

  iconText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 4,
  },

  menu: {
    position: "absolute",
    top: 28, // below the ellipsis
    right: 0,
    backgroundColor: "#1c1c1e", // dark neutral
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    minWidth: 120,

    // subtle elevation
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },

  deleteText: {
    color: "#ff4d4f", // destructive red
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
});
