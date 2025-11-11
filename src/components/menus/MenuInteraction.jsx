import { TouchableOpacity, View } from "react-native";
import { MenuInteractionStyles } from "../../styles/MenuInteractionStyles";

export const MenuInteraction = ({
  likeIcon,
  dislikeIcon,
  shareIcon,
  commentIcon,
  repostIcon,
  moreOptionsIcon,
  containerStyles,
  columnMainIconStyles,
}) => {
  return (
    <View style={[MenuInteractionStyles.container, containerStyles]}>
      <View
        style={[MenuInteractionStyles.column_mainIcons, columnMainIconStyles]}
      >
        {likeIcon && (
          <TouchableOpacity>
            <View style={MenuInteractionStyles.icon}>{likeIcon}</View>
          </TouchableOpacity>
        )}
        {dislikeIcon && (
          <TouchableOpacity>
            <View style={MenuInteractionStyles.icon}>{dislikeIcon}</View>
          </TouchableOpacity>
        )}
        {shareIcon && (
          <TouchableOpacity>
            <View style={MenuInteractionStyles.icon}>{shareIcon}</View>
          </TouchableOpacity>
        )}
        {commentIcon && (
          <TouchableOpacity>
            <View style={MenuInteractionStyles.icon}>{commentIcon}</View>
          </TouchableOpacity>
        )}
        {repostIcon && (
          <TouchableOpacity>
            <View style={MenuInteractionStyles.icon}>{repostIcon}</View>
          </TouchableOpacity>
        )}
      </View>

      {moreOptionsIcon && <View>{moreOptionsIcon}</View>}
    </View>
  );
};
