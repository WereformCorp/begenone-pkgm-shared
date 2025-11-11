import { Image, Pressable, Text, View } from "react-native";
import { MenuChannelMetaStyles } from "../../styles/MenuChannelMetaStyles";

export const MenuChannelMeta = ({
  calendarIcon,
  timeAgo,
  eyeIcon,
  viewsText,
  channelLogo,
  userName,
  subscribersCount,
  containerStyles,
}) => {
  return (
    <View style={[MenuChannelMetaStyles.container, containerStyles]}>
      <View style={MenuChannelMetaStyles.dateViewsContainer}>
        <View style={MenuChannelMetaStyles.dateContainer}>
          <View style={MenuChannelMetaStyles.dateIcon}>{calendarIcon}</View>
          <Text style={MenuChannelMetaStyles.dateText}>
            {timeAgo || "14 Hours Ago"}
          </Text>
        </View>
        <View style={MenuChannelMetaStyles.viewsContainer}>
          <View style={MenuChannelMetaStyles.eyeIcon}>{eyeIcon}</View>
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
            <Text style={MenuChannelMetaStyles.userName}>
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
