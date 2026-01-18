import { globalStyles } from "./globalStyles";

/* Comment input field layout styles */
export const commentInputStyles = {
  container: {
    // Comment input container
    flexDirection: "row",
    width: "auto",
    backgroundColor: globalStyles.colors.colorPrimary350,
    borderRadius: globalStyles.borders.borderPrimary200,
    height: 50,
    justifyContent: "space-between",
    alignItems: "center",
    justifySelf: "center",
    marginRight: 12,
    marginLeft: 12,
    paddingLeft: 12,
    paddingRight: 24,
  },

  input: {
    // Comment text input
    paddingLeft: 8,
    paddingRight: 8,
    color: "#fff",
  },
};
