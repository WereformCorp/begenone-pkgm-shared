import { Animated, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useCallback, useRef } from "react";
import { MenuChannelMetaStyles as S } from "../../styles/MenuChannelMetaStyles";

const PRESS_SCALE = 0.94;

/**
 * Subscribe / Subscribed control — same visuals as MenuChannelMeta (video wire view).
 */
export function ChannelSubscribeButton({ isSubscribed, disabled, onPress }) {
  const subScale = useRef(new Animated.Value(1)).current;

  const fire = useCallback(() => {
    Animated.sequence([
      Animated.timing(subScale, {
        toValue: PRESS_SCALE,
        duration: 80,
        useNativeDriver: true,
      }),
      Animated.timing(subScale, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
    onPress?.();
  }, [onPress, subScale]);

  return (
    <Pressable onPress={fire} disabled={disabled}>
      <Animated.View
        style={[
          S.subscribeButton,
          isSubscribed ? S.subscribeButtonSub : S.subscribeButtonUnsub,
          { transform: [{ scale: subScale }] },
          disabled && { opacity: 0.65 },
        ]}
      >
        {isSubscribed ? (
          <View style={S.subscribedInner}>
            <Ionicons name="checkmark" size={16} color="#ff5e00" />
            <Text style={S.subscribeTextSubscribed}>Subscribed</Text>
          </View>
        ) : (
          <Text style={S.subscribeText}>Subscribe</Text>
        )}
      </Animated.View>
    </Pressable>
  );
}
