export const inputStyles = {
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",

    borderRadius: 8,
    borderWidth: 1,
    borderColor: "rgba(37, 37, 37, 0)",
    // backgroundColor: "#fff",
    // width: 320,
    overflow: "hidden", // necessary for clipping children
  },
  input: {
    height: 50,
    width: "85%",
    paddingLeft: 14,
    paddingRight: 14,
    fontFamily: "Inter",
    fontWeight: "700",
    color: "#3c3c3c",
  },

  icon: {
    marginHorizontal: 5,
  },
  error: {
    color: "red",
    fontSize: 12,
    marginTop: 4,
  },
};
