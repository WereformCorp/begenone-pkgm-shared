/* Reusable input field styles */
export const inputStyles = {
  label: {
    // Input label text
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },

  inputWrapper: {
    // Input container with icon support
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(37, 37, 37, 0)",
    overflow: "hidden",
  },

  input: {
    // Text input field
    width: "auto",
    paddingLeft: 14,
    paddingRight: 14,
    fontFamily: "Inter",
    fontWeight: "700",
    color: "#3c3c3c",
  },

  icon: {
    // Input icon spacing
    marginHorizontal: 5,
  },

  error: {
    // Validation error text
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
};
