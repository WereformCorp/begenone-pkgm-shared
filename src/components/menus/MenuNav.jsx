import { Text, TouchableOpacity, View } from "react-native";
import { menuNavStyles } from "../../styles/menuNavStyles";
import { Ionicons } from "@expo/vector-icons";

export function MenuNav({
  homeIcon,
  wireIcon,
  uploadIcon,
  channelIcon,
  profileIcon,

  onPressHome,
  onPressWire,
  onPressUpload,
  onPressChannel,
  onPressProfile,
}) {
  return (
    <View style={menuNavStyles.container}>
      <TouchableOpacity onPress={onPressHome}>{homeIcon}</TouchableOpacity>
      <TouchableOpacity onPress={onPressWire}>{wireIcon}</TouchableOpacity>
      <TouchableOpacity onPress={onPressUpload}>{uploadIcon}</TouchableOpacity>
      <TouchableOpacity onPress={onPressChannel}>
        {channelIcon}
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressProfile}>
        {profileIcon || (
          <Ionicons name="person-outline" size={24} color="white" />
        )}
      </TouchableOpacity>
    </View>
  );
}
