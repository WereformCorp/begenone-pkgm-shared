import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  FlatList,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const SHEET_HEIGHT = Math.min(SCREEN_HEIGHT * 0.6, 420);
const ANIM_DURATION = 240;

/**
 * CommentBottomSheet
 *
 * Slides up from bottom, similar to ShareBottomSheet.
 * Shows comments list, optional custom renderer (e.g. WireCardLayout),
 * and an input (emoji | TextInput | Post) at the bottom.
 * Wrapped in KeyboardAvoidingView so input moves above keyboard.
 *
 * Props:
 * - visible (boolean)
 * - onClose ()
 * - comments (array)
 * - loading (boolean)
 * - onSubmitComment (text => void) – optional; when provided, shows input
 * - renderCommentItem (item => ReactNode) – optional; custom row renderer
 */
export function CommentBottomSheet({
  visible,
  onClose,
  comments = [],
  loading = false,
  onSubmitComment,
  renderCommentItem,
}) {
  const translateY = useRef(new Animated.Value(SHEET_HEIGHT)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;
  const [commentText, setCommentText] = useState("");

  useEffect(() => {
    if (visible) {
      openSheet();
    } else {
      setCommentText("");
    }
  }, [visible]);

  function openSheet() {
    Animated.parallel([
      Animated.timing(backdropOpacity, {
        toValue: 1,
        duration: ANIM_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: ANIM_DURATION,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function closeSheet() {
    Animated.parallel([
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: ANIM_DURATION,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: SHEET_HEIGHT,
        duration: ANIM_DURATION,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose?.();
    });
  }

  function handlePost() {
    const trimmed = (commentText ?? "").trim();
    if (!trimmed) return;
    onSubmitComment?.(trimmed);
    setCommentText("");
  }

  const showInput = typeof onSubmitComment === "function";

  const defaultRenderItem = ({ item }) => (
    <View style={styles.defaultCommentRow}>
      <Text style={styles.defaultAuthor}>
        {item?.userName ?? item?.authorName ?? "Unknown"}
      </Text>
      <Text style={styles.defaultText}>
        {item?.content ?? item?.text ?? ""}
      </Text>
    </View>
  );

  const keyExtractor = item =>
    String(item?.id ?? item?._id ?? item?.content ?? Math.random());

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      statusBarTranslucent
      onRequestClose={closeSheet}
    >
      <Pressable style={styles.backdropTouch} onPress={closeSheet}>
        <Animated.View style={[styles.backdrop, { opacity: backdropOpacity }]} />
      </Pressable>

      <Animated.View style={[styles.sheet, { transform: [{ translateY }] }]}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Comments</Text>
          <Pressable
            onPress={closeSheet}
            style={({ pressed }) => [
              styles.closeBtn,
              { opacity: pressed ? 0.6 : 1 },
            ]}
          >
            <Ionicons name="close" size={24} color="#e4e4e7" />
          </Pressable>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 0}
          style={styles.kav}
        >
          {loading ? (
            <View style={styles.loadingWrap}>
              <ActivityIndicator color="#ff5e00" size="small" />
              <Text style={styles.loadingText}>Loading comments…</Text>
            </View>
          ) : (
            <FlatList
              data={comments}
              keyExtractor={keyExtractor}
              renderItem={
                renderCommentItem
                  ? ({ item }) => renderCommentItem(item)
                  : defaultRenderItem
              }
              contentContainerStyle={
                renderCommentItem
                  ? styles.listContentFullWidth
                  : styles.listContent
              }
              ListEmptyComponent={
                <Text style={styles.emptyText}>No comments yet</Text>
              }
            />
          )}

          {showInput && (
            <View style={styles.inputRow}>
              <Pressable
                style={({ pressed }) => [
                  styles.emojiBtn,
                  { opacity: pressed ? 0.6 : 1 },
                ]}
              >
                <Ionicons name="happy-outline" size={22} color="#a1a1aa" />
              </Pressable>
              <TextInput
                value={commentText}
                onChangeText={setCommentText}
                placeholder="Add a comment…"
                placeholderTextColor="#6b7280"
                style={styles.input}
              />
              <Pressable
                onPress={handlePost}
                style={({ pressed }) => [
                  styles.postBtn,
                  {
                    opacity: (commentText ?? "").trim()
                      ? pressed
                        ? 0.6
                        : 1
                      : 0.4,
                  },
                ]}
                disabled={!(commentText ?? "").trim()}
              >
                <Text style={styles.postText}>Post</Text>
              </Pressable>
            </View>
          )}
        </KeyboardAvoidingView>
      </Animated.View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdropTouch: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  sheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: SHEET_HEIGHT,
    backgroundColor: "#121212",
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 18,
    paddingTop: 14,
    paddingBottom: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(255,255,255,0.08)",
  },
  title: {
    color: "#e4e4e7",
    fontSize: 16,
    fontWeight: "700",
  },
  closeBtn: {
    padding: 4,
  },
  kav: {
    flex: 1,
  },
  listContent: {
    paddingHorizontal: 18,
    paddingVertical: 12,
  },
  listContentFullWidth: {
    paddingHorizontal: 0,
    paddingVertical: 12,
  },
  defaultCommentRow: {
    paddingVertical: 10,
  },
  defaultAuthor: {
    color: "#a1a1aa",
    fontSize: 13,
    fontWeight: "600",
  },
  defaultText: {
    color: "#e4e4e7",
    fontSize: 14,
    marginTop: 2,
  },
  emptyText: {
    color: "#6b7280",
    fontSize: 14,
    textAlign: "center",
    marginTop: 24,
  },
  loadingWrap: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  loadingText: {
    color: "#a1a1aa",
    fontSize: 13,
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 10,
    paddingBottom: 24,
    backgroundColor: "#121212",
    gap: 8,
  },
  emojiBtn: {
    padding: 4,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "rgba(255,255,255,0.08)",
    borderRadius: 20,
    paddingHorizontal: 16,
    color: "#fff",
    fontSize: 14,
  },
  postBtn: {
    paddingHorizontal: 14,
    paddingVertical: 8,
  },
  postText: {
    color: "#ff5e00",
    fontSize: 15,
    fontWeight: "600",
  },
});
