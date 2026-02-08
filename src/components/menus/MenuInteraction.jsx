import {
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from "react-native";
import { MenuInteractionStyles } from "../../styles/MenuInteractionStyles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet } from "react-native";

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
}) => {
  const [open, setOpen] = useState(false);
  const { width } = useWindowDimensions();

  // Scales with screen width: ~22 on a 375pt phone, ~26 on a 430pt phone
  const iconSize = Math.round(width * 0.06);

  return (
    <View style={[MenuInteractionStyles.container, containerStyles]}>
      <View
        style={[MenuInteractionStyles.column_mainIcons, columnMainIconStyles]}
      >
        <TouchableOpacity>
          <View style={MenuInteractionStyles.icon}>
            <Ionicons name="thumbs-up-outline" size={iconSize} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={MenuInteractionStyles.icon}>
            <Ionicons name="thumbs-down-outline" size={iconSize} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={MenuInteractionStyles.icon}>
            <Ionicons name="arrow-redo" size={iconSize} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={MenuInteractionStyles.icon}>
            <Ionicons name="chatbubble-ellipses" size={iconSize} color="#fff" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={MenuInteractionStyles.icon}>
            <Ionicons name="repeat-outline" size={iconSize} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>

      {canDelete && (
        <TouchableOpacity
          onPress={() => {
            setOpen(!open);
            pressed?.(true);
          }}
        >
          <Ionicons
            name="ellipsis-vertical-outline"
            size={iconSize}
            color="white"
          />
        </TouchableOpacity>
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
