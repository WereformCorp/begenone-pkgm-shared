import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const customizableButtonStyles = StyleSheet.create({
  container: {},

  buttonContainer: {
    height: 50,
    width: "auto",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: globalStyles.borders.borderPrimary100,
    backgroundColor: "#fff",
  },

  buttonText: {
    flexDirection: "row",
    color: "#000",
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
  },
});
