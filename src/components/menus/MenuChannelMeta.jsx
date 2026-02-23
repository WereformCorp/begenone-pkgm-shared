import { Animated, Image, Pressable, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { MenuChannelMetaStyles as S } from "../../styles/MenuChannelMetaStyles";

const PRESS_SCALE = 0.94;
const ENTRANCE_DURATION = 400;
const BELL_PULSE_DURATION = 200;

const DEFAULT_AVATAR =
  "https://begenone-images.s3.us-east-1.amazonaws.com/default-user-photo.jpg";

/**
 * MenuChannelMeta
 *
 * Premium channel meta container for Begenone video screens.
 * Dark theme, glass-like depth, micro-animations.
 * Subscribe + notification bell with state toggles.
 */
function MenuChannelMetaComponent({
  timeAgo,
  viewsText,
  channelLogo,
  userName,
  subscribersCount,
  calendarIcon,
  eyeIcon,
  containerStyles,
  customCardStyles,
  showSubscribe = true,
  showNotificationBell = true,
  showMenuButton = false,
  onMenuPress,
  onChannelPress,
  cardHeight,
  hideCardBorder = false,
  compact = false,
}) {
  const [isSubscribed, setSubscribed] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const entranceAnim = useRef(new Animated.Value(0)).current;
  const avatarScale = useRef(new Animated.Value(1)).current;
  const subScale = useRef(new Animated.Value(1)).current;
  const bellScale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(entranceAnim, {
      toValue: 1,
      duration: ENTRANCE_DURATION,
      useNativeDriver: true,
    }).start();
  }, [entranceAnim]);

  const animatePress = useCallback((animRef, onPress) => {
    return () => {
      Animated.sequence([
        Animated.timing(animRef, {
          toValue: PRESS_SCALE,
          duration: 80,
          useNativeDriver: true,
        }),
        Animated.timing(animRef, {
          toValue: 1,
          duration: 120,
          useNativeDriver: true,
        }),
      ]).start();
      onPress?.();
    };
  }, []);

  const handleSubscribe = useCallback(() => {
    setSubscribed(prev => !prev);
  }, []);

  const handleBell = useCallback(() => {
    setNotificationsEnabled(prev => !prev);
    Animated.sequence([
      Animated.timing(bellScale, {
        toValue: 1.2,
        duration: BELL_PULSE_DURATION / 2,
        useNativeDriver: true,
      }),
      Animated.timing(bellScale, {
        toValue: 1,
        duration: BELL_PULSE_DURATION / 2,
        useNativeDriver: true,
      }),
    ]).start();
  }, [bellScale]);

  const CalendarIcon = calendarIcon ?? (
    <Ionicons name="calendar-outline" size={16} color="rgba(255,255,255,0.6)" />
  );
  const EyeIcon = eyeIcon ?? (
    <Ionicons name="eye-outline" size={16} color="rgba(255,255,255,0.6)" />
  );

  const subCount = subscribersCount ?? 0;
  const subLabel =
    typeof subCount === "number" && subCount === 1
      ? "Subscriber"
      : "Subscribers";

  const avatarSize = compact ? 32 : 52;
  const avatarWrapperStyle = compact
    ? [
        S.avatarWrapper,
        {
          width: avatarSize,
          height: avatarSize,
          borderRadius: avatarSize / 2,
          marginRight: 10,
        },
      ]
    : S.avatarWrapper;

  return (
    <Animated.View
      style={[
        S.container,
        compact && { marginHorizontal: 0, marginVertical: 4 },
        containerStyles,
        {
          opacity: entranceAnim,
          transform: [
            {
              translateY: entranceAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [8, 0],
              }),
            },
          ],
        },
      ]}
    >
      <View
        style={[
          S.card,
          cardHeight != null &&
            !compact && { minHeight: cardHeight, height: cardHeight },
          hideCardBorder && S.cardNoBorder,
          compact && { padding: 10, minHeight: undefined },
          customCardStyles,
        ]}
      >
        {!compact && (
          <View style={S.metaRow}>
            <View style={S.metaIcon}>{CalendarIcon}</View>
            <Text style={S.metaText}>{timeAgo || "Recently"}</Text>
            {viewsText != null && (
              <>
                <View style={S.metaIconSpaced}>{EyeIcon}</View>
                <Text style={S.metaText}>{viewsText}</Text>
              </>
            )}
          </View>
        )}

        <View style={S.channelRow}>
          <Pressable onPress={animatePress(avatarScale, onChannelPress)}>
            <Animated.View
              style={[
                avatarWrapperStyle,
                {
                  transform: [{ scale: avatarScale }],
                },
              ]}
            >
              <Image
                source={{ uri: channelLogo || DEFAULT_AVATAR }}
                style={S.avatar}
                resizeMode="cover"
              />
            </Animated.View>
          </Pressable>

          <Pressable
            style={S.identityColumn}
            onPress={onChannelPress}
            disabled={!onChannelPress}
          >
            <Text
              style={[S.channelName, compact && { fontSize: 14 }]}
              numberOfLines={1}
            >
              {userName || "Channel"}
            </Text>
            {!compact && (
              <Text style={S.subscriberLabel}>
                {subCount} {subLabel}
              </Text>
            )}
            {compact && timeAgo && (
              <Text style={[S.metaText, { marginTop: 2 }]}>{timeAgo}</Text>
            )}
          </Pressable>

          {(showMenuButton || showSubscribe || showNotificationBell) && (
            <View style={S.actionsRow}>
              {showMenuButton ? (
                <Pressable
                  onPress={animatePress(bellScale, onMenuPress)}
                  style={({ pressed }) => [
                    S.menuButton,
                    { opacity: pressed ? 0.6 : 1 },
                  ]}
                >
                  <Ionicons
                    name="ellipsis-vertical"
                    size={20}
                    color="rgba(255,255,255,0.8)"
                  />
                </Pressable>
              ) : (
                <>
                  {showNotificationBell && isSubscribed && (
                    <Pressable onPress={animatePress(bellScale, handleBell)}>
                      <Animated.View
                        style={[
                          S.bellButton,
                          { transform: [{ scale: bellScale }] },
                        ]}
                      >
                        <Ionicons
                          name={
                            notificationsEnabled
                              ? "notifications"
                              : "notifications-outline"
                          }
                          size={20}
                          color={
                            notificationsEnabled
                              ? "#ff5e00"
                              : "rgba(255,255,255,0.8)"
                          }
                        />
                      </Animated.View>
                    </Pressable>
                  )}

                  {showSubscribe && (
                    <Pressable
                      onPress={animatePress(subScale, handleSubscribe)}
                    >
                      <Animated.View
                        style={[
                          S.subscribeButton,
                          isSubscribed
                            ? S.subscribeButtonSub
                            : S.subscribeButtonUnsub,
                          { transform: [{ scale: subScale }] },
                        ]}
                      >
                        {isSubscribed ? (
                          <View style={S.subscribedInner}>
                            <Ionicons
                              name="checkmark"
                              size={16}
                              color="#ff5e00"
                            />
                            <Text style={S.subscribeTextSubscribed}>
                              Subscribed
                            </Text>
                          </View>
                        ) : (
                          <Text style={S.subscribeText}>Subscribe</Text>
                        )}
                      </Animated.View>
                    </Pressable>
                  )}
                </>
              )}
            </View>
          )}
        </View>
      </View>
    </Animated.View>
  );
}

export const MenuChannelMeta = memo(MenuChannelMetaComponent);
