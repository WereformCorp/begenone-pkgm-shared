/* Global header layout styles */
export const headerGlobalStyles = {
  container: {
    // Main header container
    height: 75,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: -5,
  },

  iconsContainer: {
    // Right-side icon group
    flexDirection: "row",
  },

  icons: {
    // Individual icon spacing
    paddingRight: 20,
  },

  image: {
    // Header logo image
    width: 120,
    height: 120,
    resizeMode: "contain",
    marginLeft: 24,
  },
};
