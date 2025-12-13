import { TouchableOpacity, View } from "react-native";
import { MenuInteractionStyles } from "../../styles/MenuInteractionStyles";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

export const MenuInteraction = ({
  containerStyles,
  columnMainIconStyles,
  pressed,
}) => {
  return (
    <View style={[MenuInteractionStyles.container, containerStyles]}>
      <View
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
      </View>

      <TouchableOpacity onPress={() => pressed(true)}>
        <Ionicons name="ellipsis-vertical-outline" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};
