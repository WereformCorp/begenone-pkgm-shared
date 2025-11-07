import { Text, View } from "react-native";
import { menuNavStyles } from "../../styles/menuNavStyles";

export function MenuNav({
  homeIcon,
  wireIcon,
  uploadIcon,
  videoIcon,
  profileIcon,
}) {
  return (
    <View style={menuNavStyles.container}>
      <View>{homeIcon}</View>
      <View>{wireIcon}</View>
      <View style={menuNavStyles.uploadIcon}>{uploadIcon}</View>
      <View>{videoIcon}</View>
      <View>{profileIcon}</View>
    </View>
  );
}
