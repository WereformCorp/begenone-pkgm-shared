import { Text, TouchableOpacity, View } from "react-native";
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

  return (
    <View style={[MenuInteractionStyles.container, containerStyles]}>
      {/* <View
        style={[MenuInteractionStyles.column_mainIcons, columnMainIconStyles]}
      >
        <TouchableOpacity>
          <View style={MenuInteractionStyles.icon}>
            <Ionicons name="arrow-redo" size={24} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={MenuInteractionStyles.icon}>
            <Ionicons name="chatbubble-ellipses" size={24} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={MenuInteractionStyles.icon}>
            <Ionicons name="repeat-outline" size={24} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={MenuInteractionStyles.icon}>
            <Ionicons name="thumbs-up-outline" size={24} color="white" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={MenuInteractionStyles.icon}>
            <Ionicons name="thumbs-down-outline" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View> */}

      <TouchableOpacity
        onPress={() => {
          setOpen(!open);
          pressed?.(true);
        }}
      >
        <Ionicons name="ellipsis-vertical-outline" size={24} color="white" />
      </TouchableOpacity>

      {open && canDelete && (
        <View style={MenuInteractionStyles2.menu}>
          <TouchableOpacity
            onPress={() => {
              setOpen(false);
              onDelete();
            }}
          >
            <Text style={MenuInteractionStyles2.deleteText}>Delete</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export const MenuInteractionStyles2 = StyleSheet.create({
  menu: {
    position: "absolute",
    top: 28, // below the ellipsis
    right: 0,
    backgroundColor: "#1c1c1e", // dark neutral
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 12,
    minWidth: 120,

    // subtle elevation
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 6,
  },

  deleteText: {
    color: "#ff4d4f", // destructive red
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
  },
});
