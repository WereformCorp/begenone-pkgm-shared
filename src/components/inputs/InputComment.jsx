import { Pressable, TextInput, View } from "react-native";
import { commentInputStyles } from "../../styles/commentInputStyles";

/**
 * InputComment
 *
 * Lightweight comment input field with an optional submit action.
 *
 * Props:
 * - placeholder: input placeholder text
 * - submitIcon: icon/button rendered on the right
 * - props: spread-through TextInput props (onChangeText, value, etc.)
 */

export function InputComment({ placeholder, submitIcon, props }) {
  return (
    <View style={commentInputStyles.container}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#999"
        style={[commentInputStyles.input]}
        {...props}
      />
      <Pressable>{submitIcon}</Pressable>
    </View>
  );
}
