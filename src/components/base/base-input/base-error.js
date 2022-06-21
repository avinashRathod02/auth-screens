import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "@/colors";
import { hasTextLength } from "@/utils";
import { View } from "@/components";

export const BaseError = (props) => {
  const { meta } = props;
  const hasError = meta?.submitFailed && hasTextLength(meta?.error);
  return (
    <View show={hasError} style={styles.validation}>
      <Text style={styles.title}>{meta?.error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { color: colors.primary, fontSize: 14 },
});
