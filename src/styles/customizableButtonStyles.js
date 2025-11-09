import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const customizableButtonStyles = StyleSheet.create({
  container: {},

  buttonContainer: {
    height: 50,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: globalStyles.borders.borderPrimary100,
  },
});
