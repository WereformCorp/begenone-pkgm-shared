import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import { MenuChannelMetaStyles } from "../../styles/MenuChannelMetaStyles";
import { Ionicons } from "@expo/vector-icons";
import { useEffect } from "react";

let calcWidth;
let calcHeight;

/**
 * MenuChannelMeta
 *
 * Displays channel-level metadata for a menu or content view.
 * Includes publish time, channel identity, subscriber count,
 * and a static subscribe button.
 *
 * Props:
 * - timeAgo: string (e.g. "14 Hours Ago")
 * - viewsText: string (currently unused / commented out)
 * - channelLogo: image URL for channel avatar
 * - userName: channel display name
 * - subscribersCount: subscriber total
 * - containerStyles: style overrides for root container
 * - channelContainerStyles: reserved for future layout control
 *
 * Notes:
 * - Provides safe fallbacks for missing data
 * - Subscribe button is visual-only for now
 */

export const MenuChannelMeta = ({
  timeAgo,
  viewsText,
  channelLogo,
  userName,
  subscribersCount,
  containerStyles,
  channelContainerStyles,
}) => {
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
        {/* <View style={MenuChannelMetaStyles.viewsContainer}>
          <Text style={MenuChannelMetaStyles.viewsText}>
            {viewsText || "0"}
          </Text>
          <View style={MenuChannelMetaStyles.eyeIcon}>
            <Ionicons name="eye" size={16} color="white" />
          </View>
        </View> */}
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
                {subscribersCount || "0"}
              </Text>
              <Text style={MenuChannelMetaStyles.subText}>Subscribers</Text>
            </View>
          </View>
        </View>
        <Pressable
          style={[
            MenuChannelMetaStyles.subscribeButtonContainer,
            { backgroundColor: "#303030" },
          ]}
        >
          <Text
            style={[
              MenuChannelMetaStyles.subscribeButtonText,
              { color: "#7f7f7f" },
            ]}
          >
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
