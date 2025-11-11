import { Text, TouchableOpacity, View } from "react-native";
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
      <TouchableOpacity>{homeIcon}</TouchableOpacity>
      <TouchableOpacity>{wireIcon}</TouchableOpacity>
      <TouchableOpacity style={menuNavStyles.uploadIcon}>
        {uploadIcon}
      </TouchableOpacity>
      <TouchableOpacity>{videoIcon}</TouchableOpacity>
      <TouchableOpacity>{profileIcon}</TouchableOpacity>
    </View>
  );
}
