import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import {
  MenuChannelMetaStyles,
  checkDimensions,
} from "../../styles/MenuChannelMetaStyles";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";

let calcWidth;
let calcHeight;

export const MenuChannelMeta = ({
  calendarIcon,
  timeAgo,
  eyeIcon,
  viewsText,
  channelLogo,
  userName,
  subscribersCount,
  containerStyles,
  channelContainerStyles,
}) => {
  const { width, height } = useWindowDimensions();

  // // normalize to a readable scale — multiply by 20 just for clarity
  // const scale = 10 / (height / width);
  // const ratioWidth = Number(scale.toFixed(4));
  // const ratioHeight = 10;

  // if (Platform.OS === "ios") {
  //   console.log(`📱 iOS ratio: ${ratioWidth} : ${ratioHeight}`);
  // } else if (Platform.OS === "android") {
  //   console.log(`🤖 Android ratio: ${ratioWidth} : ${ratioHeight}`);
  // }

  // const dimensionRatio = width / height;
  // const roundedRatio = Number(dimensionRatio.toFixed(5));

  // if (Platform.OS === "ios") {
  //   console.log("📱 iOS Dimensions");
  //   console.log("Width:", width);
  //   console.log("Height:", height);
  //   console.log("Ratio (width/height):", roundedRatio);
  // } else if (Platform.OS === "android") {
  //   console.log("🤖 Android Dimensions");
  //   console.log("Width:", width);
  //   console.log("Height:", height);
  //   console.log("Ratio (width/height):", roundedRatio);
  // }

  // useEffect(() => {
  //   console.log(`Platform: ${Platform.OS.toUpperCase()}`);
  //   console.log(`Width: ${width}`);
  //   console.log(`Height: ${height}`);
  //   console.log("------------------------");
  // }, [width, height]);

  return (
    <View style={[MenuChannelMetaStyles.container, containerStyles]}>
      <View style={MenuChannelMetaStyles.dateViewsContainer}>
        <View style={MenuChannelMetaStyles.dateContainer}>
          <View style={MenuChannelMetaStyles.dateIcon}>
            <Ionicons name="calendar" size={16} color="white" />
          </View>
          <Text style={MenuChannelMetaStyles.dateText}>
            {timeAgo || "14 Hours Ago"}
          </Text>
        </View>
        <View style={MenuChannelMetaStyles.viewsContainer}>
          <View style={MenuChannelMetaStyles.eyeIcon}>
            <Ionicons name="eye" size={16} color="white" />
          </View>
          <Text style={MenuChannelMetaStyles.viewsText}>
            {viewsText || "123,400"}
          </Text>
        </View>
      </View>
      <View style={MenuChannelMetaStyles.channelMetaContainer}>
        <View style={MenuChannelMetaStyles.channelMetaContainer_ColumnOne}>
          <Image
            source={{
              uri:
                channelLogo ||
                "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg",
            }}
            style={MenuChannelMetaStyles.userImage}
          />
          <View style={MenuChannelMetaStyles.nameSubcountContainer}>
            <Text
              style={[MenuChannelMetaStyles.userName, inlineStyles.userName]}
            >
              {userName || "Default Username"}
            </Text>
            <View style={MenuChannelMetaStyles.subCountContainer}>
              <Text style={MenuChannelMetaStyles.subCount}>
                {subscribersCount || "123,400"}
              </Text>
              <Text style={MenuChannelMetaStyles.subText}>Subscribers</Text>
            </View>
          </View>
        </View>
        <Pressable style={MenuChannelMetaStyles.subscribeButtonContainer}>
          <Text style={MenuChannelMetaStyles.subscribeButtonText}>
            Subscribe
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const inlineStyles = StyleSheet.create({
  userName: {
    width: "",
  },
});
