import { Pressable, TextInput, View } from "react-native";
import { commentInputStyles } from "../../styles/commentInputStyles";

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
