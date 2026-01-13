import { Image, TouchableOpacity, View } from "react-native";
import { headerGlobalStyles } from "../../styles/headerGlobalStyles";

/**
 * HeaderGlobal
 *
 * App-wide header component with logo and action icons.
 * Icons are injected to keep this component presentation-only.
 *
 * Props:
 * - aiIcon: ReactNode
 * - notificationIcon: ReactNode
 * - searchIcon: ReactNode
 */

export function HeaderGlobal({ aiIcon, notificationIcon, searchIcon }) {
  return (
    <View style={headerGlobalStyles.container}>
      <Image
        source={{
          uri: "https://begenone-images.s3.us-east-1.amazonaws.com/begenone-white-transparent-logo-beta-min.png",
        }}
        style={headerGlobalStyles.image}
      />
      <View style={headerGlobalStyles.iconsContainer}>
        <TouchableOpacity style={headerGlobalStyles.icons}>
          {aiIcon}
        </TouchableOpacity>
        <TouchableOpacity style={headerGlobalStyles.icons}>
          {notificationIcon}
        </TouchableOpacity>
        <TouchableOpacity style={headerGlobalStyles.icons}>
          {searchIcon}
        </TouchableOpacity>
      </View>
    </View>
  );
}
