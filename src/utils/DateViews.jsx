import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/globalStyles";
import { Ionicons } from "@expo/vector-icons";

export function DateViews({
  timeAgo,
  viewsText,
  containerStyles,
  dateTextStyles,
  viewsTextStyles,
  dateContainerStyles,
}) {
  return (
    <View style={[styles.dateViewsContainer, containerStyles]}>
      <View style={[styles.dateContainer, dateContainerStyles]}>
        <View style={[styles.dateIcon]}>
          <Ionicons name="calendar-clear-outline" size={16} color="white" />
        </View>
        <Text style={[styles.dateText, dateTextStyles]}>{timeAgo}</Text>
      </View>
      <View style={styles.viewsContainer}>
        <View style={[styles.eyeIcon]}>
          <Ionicons name="eye-outline" size={16} color="white" />
        </View>
        <Text style={[styles.viewsText, viewsTextStyles]}>
          {viewsText}
          <Text style={{ color: "white" }}>{" Views"}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  dateViewsContainer: {
    width: "100%",
    height: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
    paddingRight: 8,
    // paddingLeft: 8,
  },

  dateContainer: {
    flexDirection: "row",
    rowGap: 20,
    paddingRight: 16,
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
});
