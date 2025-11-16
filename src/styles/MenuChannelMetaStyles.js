import { Platform, StyleSheet, useWindowDimensions } from "react-native";
import { globalStyles } from "./globalStyles";

export const checkDimensions = () => {};

// checkDimensions();

export const MenuChannelMetaStyles = StyleSheet.create({
  container: {
    width: "auto",
    marginRight: 12,
    marginLeft: 12,
  },

  dateViewsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingRight: 6,
    paddingLeft: 6,
  },

  dateContainer: {
    flexDirection: "row",
    rowGap: 20,
  },

  dateIcon: {
    marginRight: 8,
  },

  viewsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  eyeIcon: {
    marginRight: 8,
    marginLeft: 8,
  },

  dateText: {
    color: globalStyles.colors.colorPrimary600,
  },

  viewsText: {
    color: globalStyles.colors.colorPrimary600,
  },

  channelMetaContainer: {
    flexDirection: "row",
    backgroundColor: globalStyles.colors.colorPrimary200,
    // width: "100%",
    // margin: 12,
    padding: 12,
    marginBottom: 6,
    marginTop: 12,
    borderRadius: globalStyles.borders.borderPrimary100,
    justifyContent: "space-between",
  },

  channelMetaContainer_ColumnOne: {
    flexDirection: "row",
  },

  userImage: {
    width: 40,
    height: 40,
    borderRadius: globalStyles.borders.borderPrimary50,
  },

  nameSubcountContainer: {
    flexDirection: "column",
    paddingLeft: 12,
  },

  userName: {
    color: "#fff",
    fontSize: Platform.OS === "ios" ? 16 : 14,
    paddingBottom: 4,
    fontWeight: "bold",
  },

  subCountContainer: {
    flexDirection: "row",
  },

  subCount: {
    color: globalStyles.colors.colorPrimary600,
    paddingRight: 6,
    fontSize: 12,
    fontWeight: "bold",
  },

  subText: {
    color: "#fff",
    fontSize: 12,
  },

  subscribeButtonContainer: {
    backgroundColor: globalStyles.colors.colorPrimary600,
    width: Platform.OS === "ios" ? 100 : 80,
    borderRadius: globalStyles.borders.borderPrimary400,
    alignItems: "center",
    justifyContent: "center",
  },

  subscribeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: Platform === "ios" ? 18 : 12,
  },
});
