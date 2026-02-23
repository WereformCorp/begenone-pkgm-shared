import { Platform, StyleSheet } from "react-native";

/* BEGENONE MenuChannelMeta - dark orange + white theme */
const COLORS = {
  bgBase: "#0E0E0E",
  bgRaised: "#171413",
  bgElevated: "#2A2420",
  textPrimary: "#fff",
  textMuted: "rgba(255,255,255,0.6)",
  accent: "#ff5e00",
  accentSubscribed: "rgba(255,94,0,0.25)",
  avatarRing: "rgba(255,255,255,0.12)",
};

export const MenuChannelMetaStyles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    marginVertical: 8,
    paddingBottom: 8,
  },

  card: {
    backgroundColor: COLORS.bgRaised,
    // borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.04)",
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 6,
  },

  cardNoBorder: {
    borderWidth: 0,
    borderColor: "transparent",
    shadowOpacity: 0,
    elevation: 0,
  },

  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
  },

  metaIcon: {
    marginRight: 6,
  },

  metaIconSpaced: {
    marginRight: 6,
    marginLeft: 16,
  },

  metaText: {
    color: COLORS.textMuted,
    fontSize: 13,
  },

  channelRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatarWrapper: {
    width: 52,
    height: 52,
    borderRadius: 26,
    padding: 2,
    backgroundColor: COLORS.avatarRing,
    marginRight: 14,
  },

  avatar: {
    width: "100%",
    height: "100%",
    borderRadius: 24,
  },

  identityColumn: {
    flex: 1,
    justifyContent: "center",
  },

  channelName: {
    color: COLORS.textPrimary,
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 2,
  },

  subscriberLabel: {
    color: COLORS.textMuted,
    fontSize: 12,
  },

  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  bellButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.bgElevated,
    alignItems: "center",
    justifyContent: "center",
  },

  menuButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.bgElevated,
    alignItems: "center",
    justifyContent: "center",
  },

  subscribeButton: {
    paddingHorizontal: 20,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    minWidth: 100,
  },

  subscribeButtonUnsub: {
    backgroundColor: COLORS.accent,
  },

  subscribeButtonSub: {
    backgroundColor: COLORS.accentSubscribed,
    borderWidth: 1,
    borderColor: COLORS.accent,
  },

  subscribeText: {
    color: COLORS.textPrimary,
    fontSize: Platform.OS === "ios" ? 15 : 14,
    fontWeight: "700",
  },

  subscribeTextSubscribed: {
    color: COLORS.accent,
    fontSize: Platform.OS === "ios" ? 15 : 14,
    fontWeight: "700",
  },

  subscribedInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
