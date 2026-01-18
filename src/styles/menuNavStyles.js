import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

/* Bottom menu navigation bar styles */
export const menuNavStyles = StyleSheet.create({
  container: {
    // Bottom navigation container
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: globalStyles.colors.colorPrimary200,
    height: 60,
    width: "80%",
    alignSelf: "center",
    alignItems: "center",
    borderRadius: globalStyles.borders.borderPrimary300,
  },

  uploadIcon: {
    // Highlighted upload icon
    color: globalStyles.colors.colorPrimary600,
  },
});
