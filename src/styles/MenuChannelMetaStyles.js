import { Platform, StyleSheet, useWindowDimensions } from "react-native";
import { globalStyles } from "./globalStyles";

/* Channel metadata styles for menu/feed context */
export const MenuChannelMetaStyles = StyleSheet.create({
  container: {
    // Outer metadata wrapper
    width: "auto",
    marginRight: 12,
    marginLeft: 12,
  },

  dateViewsContainer: {
    // Row for date and view count
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingRight: 6,
    paddingLeft: 6,
  },

  dateContainer: {
    // Date icon and text container
    flexDirection: "row",
    rowGap: 20,
  },

  dateIcon: {
    // Date icon spacing
    marginRight: 8,
  },

  viewsContainer: {
    // Views icon and text container
    flexDirection: "row",
    alignItems: "center",
  },

  eyeIcon: {
    // Eye icon spacing
    marginRight: 8,
    marginLeft: 8,
  },

  dateText: {
    // Date text style
    color: globalStyles.colors.colorPrimary600,
  },

  viewsText: {
    // Views count text style
    color: globalStyles.colors.colorPrimary600,
  },

  channelMetaContainer: {
    // Channel identity and subscribe container
    flexDirection: "row",
    backgroundColor: globalStyles.colors.colorPrimary200,
    padding: 12,
    marginBottom: 6,
    marginTop: 12,
    borderRadius: globalStyles.borders.borderPrimary100,
    justifyContent: "space-between",
  },

  channelMetaContainer_ColumnOne: {
    // Left column with avatar and name
    flexDirection: "row",
  },

  userImage: {
    // Channel avatar image
    width: 40,
    height: 40,
    borderRadius: globalStyles.borders.borderPrimary50,
  },

  nameSubcountContainer: {
    // Username and subscriber count stack
    flexDirection: "column",
    paddingLeft: 12,
  },

  userName: {
    // Channel display name
    color: "#fff",
    fontSize: Platform.OS === "ios" ? 16 : 14,
    paddingBottom: 4,
    fontWeight: "bold",
  },

  subCountContainer: {
    // Subscriber count row
    flexDirection: "row",
  },

  subCount: {
    // Numeric subscriber count
    color: globalStyles.colors.colorPrimary600,
    paddingRight: 6,
    fontSize: 12,
    fontWeight: "bold",
  },

  subText: {
    // Subscriber label text
    color: "#fff",
    fontSize: 12,
  },

  subscribeButtonContainer: {
    // Subscribe action button
    backgroundColor: globalStyles.colors.colorPrimary600,
    width: Platform.OS === "ios" ? 100 : 80,
    borderRadius: globalStyles.borders.borderPrimary400,
    alignItems: "center",
    justifyContent: "center",
  },

  subscribeButtonText: {
    // Subscribe button label
    color: "#fff",
    fontWeight: "bold",
    fontSize: Platform === "ios" ? 18 : 12,
  },
});
