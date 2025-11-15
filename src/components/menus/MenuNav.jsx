import { Text, TouchableOpacity, View } from "react-native";
import { menuNavStyles } from "../../styles/menuNavStyles";

export function MenuNav({
  homeIcon,
  wireIcon,
  uploadIcon,
  videoIcon,
  profileIcon,

  onPressHome,
  onPressWire,
  onPressUpload,
  onPressVideo,
  onPressProfile,
}) {
  return (
    <View style={menuNavStyles.container}>
      <TouchableOpacity onPress={onPressHome}>{homeIcon}</TouchableOpacity>
      <TouchableOpacity onPress={onPressWire}>{wireIcon}</TouchableOpacity>
      <TouchableOpacity onPress={onPressUpload}>{uploadIcon}</TouchableOpacity>
      <TouchableOpacity onPress={onPressVideo}>{videoIcon}</TouchableOpacity>
      <TouchableOpacity onPress={onPressProfile}>
        {profileIcon}
      </TouchableOpacity>
    </View>
  );
}
