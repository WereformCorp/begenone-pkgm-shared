import { globalStyles } from "./globalStyles";

export const MenuChannelMetaStyles = {
  container: {
    width: "100%",
  },

  dateViewsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingRight: 24,
    paddingLeft: 24,
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
  },

  eyeIcon: {
    marginRight: 8,
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
    margin: 12,
    padding: 12,
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
    fontSize: 16,
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
    width: 100,
    borderRadius: globalStyles.borders.borderPrimary400,
    alignItems: "center",
    justifyContent: "center",
  },

  subscribeButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
};
