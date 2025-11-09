import { globalStyles } from "./globalStyles";

export const dropDownStyles = {
  container: {
    width: "auto",
    marginLeft: 16,
    marginRight: 16,
  },

  picker: {
    height: 40,
    flex: 1,

    // color: "#151515",
  },

  overlayStyle: {
    backgroundColor: globalStyles.colors.colorPrimary50,
  },

  optionTextStyle: {
    color: "#fff",
  },

  optionContainerStyle: {
    backgroundColor: globalStyles.colors.colorPrimary200,
    borderWidth: 1,
    borderRadius: globalStyles.borders.borderPrimary200,
    justifyContent: "space-between",
  },

  cancelContainerStyle: {
    backgroundColor: "#fff",
  },

  dropDownContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    // borderWidth: 1,
    borderRadius: globalStyles.borders.borderPrimary200,
    height: 50,
    alignItems: "center",
    paddingRight: 12,
    paddingLeft: 12,
    backgroundColor: globalStyles.colors.colorPrimary200,
  },

  dropDownText: {
    color: "#fff",
  },
};
