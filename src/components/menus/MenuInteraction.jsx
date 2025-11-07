import { View } from "react-native";
import { MenuInteractionStyles } from "../../styles/MenuInteractionStyles";

export const MenuInteraction = ({
  likeIcon,
  dislikeIcon,
  shareIcon,
  commentIcon,
  repostIcon,
  moreOptionsIcon,
}) => {
  return (
    <View style={MenuInteractionStyles.container}>
      <View style={MenuInteractionStyles.column_mainIcons}>
        {likeIcon && <View style={MenuInteractionStyles.icon}>{likeIcon}</View>}
        {dislikeIcon && (
          <View style={MenuInteractionStyles.icon}>{dislikeIcon}</View>
        )}
        {shareIcon && (
          <View style={MenuInteractionStyles.icon}>{shareIcon}</View>
        )}
        {commentIcon && (
          <View style={MenuInteractionStyles.icon}>{commentIcon}</View>
        )}
        {repostIcon && (
          <View style={MenuInteractionStyles.icon}>{repostIcon}</View>
        )}
      </View>

      {moreOptionsIcon && <View>{moreOptionsIcon}</View>}
    </View>
  );
};
