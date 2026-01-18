import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

/* Reusable customizable button styles */
export const customizableButtonStyles = StyleSheet.create({
  container: {
    // Outer wrapper container
  },

  buttonContainer: {
    // Button surface container
    height: 50,
    width: "auto",
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: globalStyles.borders.borderPrimary100,
    backgroundColor: "#fff",
  },

  buttonText: {
    // Button label text
    flexDirection: "row",
    color: "#000",
    fontSize: 16,
    textAlign: "center",
    textAlignVertical: "center",
    alignItems: "center",
  },
});
