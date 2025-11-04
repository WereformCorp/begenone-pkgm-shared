import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const SampleButton = ({ title = "Click Me", onPress }) => (
  <TouchableOpacity
    style={{
      backgroundColor: "#1E90FF",
      padding: 10,
      borderRadius: 8,
      alignItems: "center",
      marginVertical: 5,
    }}
    onPress={onPress}
  >
    <Text style={{ color: "#fff", fontWeight: "bold" }}>{title}</Text>
  </TouchableOpacity>
);
