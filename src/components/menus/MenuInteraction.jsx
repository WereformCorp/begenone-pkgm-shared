import {
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { MenuInteractionStyles } from "../../styles/MenuInteractionStyles";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";

/**
 * MenuInteraction
 *
 * Renders the primary interaction controls for a post or wire.
 * Includes share, comment, repost, like, dislike recognized actions.
 *
 * Props:
 * - containerStyles: override styles for root container
 * - columnMainIconStyles: override styles for icon column
 * - pressed: callback to trigger overflow / context menu
 *
 * Notes:
 * - Icons are presentation-only
 * - Interaction handlers are expected to be wired upstream
 */

export const MenuInteraction = ({
  containerStyles,
  columnMainIconStyles,
  pressed,
  canDelete,
  onDelete,
  initialLiked = false,
  initialDisliked = false,
  likesCount = 0,
  dislikesCount = 0,
  onLike,
  onDislike,
  onShare,
  onComment,
  onRepost,
  variant = "default",
  showMenuButton = false,
  onMenuPress,
}) => {
  const isMinimal = variant === "minimal";
  const [open, setOpen] = useState(false);
  const [liked, setLiked] = useState(initialLiked);
  const [disliked, setDisliked] = useState(initialDisliked);

  // Re-sync to server-authoritative state whenever video data is refetched
  useEffect(() => {
    setLiked(initialLiked);
  }, [initialLiked]);

  useEffect(() => {
    setDisliked(initialDisliked);
  }, [initialDisliked]);
  const iconSize = 22;

  function handleLike() {
    const wasLiked = liked;
    setLiked(!wasLiked);
    if (disliked) setDisliked(false); // mutual exclusion
    onLike?.();
  }

  function handleDislike() {
    const wasDisliked = disliked;
    setDisliked(!wasDisliked);
    if (liked) setLiked(false); // mutual exclusion
    onDislike?.();
  }

  const chipLikeStyle = liked
    ? (isMinimal ? MenuInteractionStyles.chipLikedMinimal : MenuInteractionStyles.engagementChipLiked)
    : (isMinimal ? MenuInteractionStyles.chipNeutralMinimal : MenuInteractionStyles.engagementChipNeutral);
  const chipDislikeStyle = disliked
    ? (isMinimal ? MenuInteractionStyles.chipDislikedMinimal : MenuInteractionStyles.engagementChipDisliked)
    : (isMinimal ? MenuInteractionStyles.chipNeutralMinimal : MenuInteractionStyles.engagementChipNeutral);

  const reactiveStyle = ({ pressed }) =>
    isMinimal
      ? { opacity: pressed ? 0.7 : 1 }
      : { opacity: pressed ? 0.85 : 1, transform: [{ scale: pressed ? 0.94 : 1 }] };

  const iconStyle = isMinimal ? MenuInteractionStyles.iconMinimal : MenuInteractionStyles.icon;
  const chipStyle = isMinimal ? MenuInteractionStyles.chipMinimal : MenuInteractionStyles.engagementChip;

  const showDots = canDelete || showMenuButton;

  return (
    <View style={[MenuInteractionStyles.container, containerStyles]}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={MenuInteractionStyles.scrollRow}
        style={{ flex: 1 }}
      >
        <View
          style={[MenuInteractionStyles.column_mainIcons, columnMainIconStyles]}
        >
          <Pressable onPress={handleLike} style={reactiveStyle}>
            <View style={[chipStyle, chipLikeStyle]}>
              <Ionicons
                name={liked ? "thumbs-up" : "thumbs-up-outline"}
                size={iconSize}
                color={liked ? "#60a5fa" : "#e4e4e7"}
              />
              <Text style={MenuInteractionStyles.countText}>{likesCount}</Text>
            </View>
          </Pressable>

          <Pressable onPress={handleDislike} style={reactiveStyle}>
            <View style={[chipStyle, chipDislikeStyle]}>
              <Ionicons
                name={disliked ? "thumbs-down" : "thumbs-down-outline"}
                size={iconSize}
                color={disliked ? "#ff5e00" : "#e4e4e7"}
              />
              <Text style={MenuInteractionStyles.countText}>{dislikesCount}</Text>
            </View>
          </Pressable>

          <Pressable onPress={() => onShare?.()} style={reactiveStyle}>
            <View style={iconStyle}>
              <Ionicons name="arrow-redo" size={iconSize} color="#e4e4e7" />
            </View>
          </Pressable>

          <Pressable onPress={() => onComment?.()} style={reactiveStyle}>
            <View style={iconStyle}>
              <Ionicons name="chatbubble-ellipses" size={iconSize} color="#e4e4e7" />
            </View>
          </Pressable>

          <Pressable onPress={() => onRepost?.()} style={reactiveStyle}>
            <View style={iconStyle}>
              <Ionicons name="repeat-outline" size={iconSize} color="#e4e4e7" />
            </View>
          </Pressable>
        </View>
      </ScrollView>

      {showDots && (
        <Pressable
          onPress={() => {
            if (canDelete) {
              setOpen(!open);
              pressed?.(true);
            } else {
              onMenuPress?.();
            }
          }}
          style={reactiveStyle}
        >
          <View style={iconStyle}>
            <Ionicons
              name="ellipsis-vertical-outline"
              size={iconSize}
              color="#e4e4e7"
            />
          </View>
        </Pressable>
      )}
      {open && (
        <View style={MenuInteractionStyles.menu}>
          <TouchableOpacity
            onPress={() => {
              setOpen(!open);
              onDelete();
            }}
          >
            <Text style={MenuInteractionStyles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};
