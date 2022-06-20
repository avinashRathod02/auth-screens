import React from "react";
import { StyleSheet, View } from "react-native";
import { Text, FadeIn } from "@/components";
import colors from "@/colors";

export const BaseError = (props) => {
  const { meta, hideError, style } = props;

  const hasError =
    !hideError &&
    meta?.submitFailed &&
    meta?.error &&
    typeof meta.error === "string";

  if (!hasError) {
    return null;
  }

  return (
    <FadeIn>
      <View style={[styles.validation, style]}>
        <Text style={styles.title}>{meta?.error}</Text>
      </View>
    </FadeIn>
  );
};

const styles = StyleSheet.create({
  title: { color: colors.primary },
  validation: {
    paddingVertical: 2,
    paddingHorizontal: 5,
    borderRadius: 3,
    overflow: "hidden",
    flex: 1,
    zIndex: 100,
    backgroundColor: "transparent",
    justifyContent: "center",
  },
});
