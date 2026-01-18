import { globalStyles } from "./globalStyles";

/* Dropdown selection component styles */
export const dropDownStyles = {
  container: {
    // Outer dropdown wrapper
    width: "auto",
  },

  picker: {
    // Native picker control
    height: 40,
    flex: 1,
  },

  overlayStyle: {
    // Modal overlay background
    backgroundColor: globalStyles.colors.colorPrimary50,
  },

  optionTextStyle: {
    // Dropdown option text
    color: "#fff",
  },

  optionContainerStyle: {
    // Dropdown option container
    backgroundColor: globalStyles.colors.colorPrimary200,
    borderWidth: 1,
    borderRadius: globalStyles.borders.borderPrimary200,
    justifyContent: "space-between",
  },

  cancelContainerStyle: {
    // Cancel action container
    backgroundColor: "#fff",
  },

  dropDownContainer: {
    // Selected value display container
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    borderRadius: globalStyles.borders.borderPrimary200,
    height: 50,
    alignItems: "center",
    paddingRight: 12,
    paddingLeft: 12,
    backgroundColor: globalStyles.colors.colorPrimary200,
  },

  dropDownText: {
    // Selected value text
    color: "#fff",
    paddingLeft: 12,
  },
};
