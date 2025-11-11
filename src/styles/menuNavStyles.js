import { StyleSheet } from "react-native";
import { globalStyles } from "./globalStyles";

export const menuNavStyles = StyleSheet.create({
  container: {
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
    color: globalStyles.colors.colorPrimary600,
  },
});
