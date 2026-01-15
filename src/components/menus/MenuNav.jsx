import { TouchableOpacity, View } from "react-native";
import { menuNavStyles } from "../../styles/menuNavStyles";
import { Ionicons } from "@expo/vector-icons";

/**
 * MenuNav
 *
 * Bottom navigation bar for core app sections.
 * Icons and handlers are injected to keep this component stateless.
 *
 * Props:
 * - homeIcon, wireIcon, uploadIcon, channelIcon, profileIcon: ReactNodes
 * - onPressHome, onPressWire, onPressUpload, onPressChannel, onPressProfile: callbacks
 *
 * Notes:
 * - Falls back to default profile icon if none is provided
 * - Designed to be reusable across screens
 */

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
