import { Image, View } from "react-native";
import { headerGlobalStyles } from "../../styles/headerGlobalStyles";

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
        <View style={headerGlobalStyles.icons}>{aiIcon}</View>
        <View style={headerGlobalStyles.icons}>{notificationIcon}</View>
        <View style={headerGlobalStyles.icons}>{searchIcon}</View>
      </View>
    </View>
  );
}
