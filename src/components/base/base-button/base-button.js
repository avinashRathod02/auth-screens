import React from "react";
import { StyleSheet } from "react-native";
import colors from "@/colors";
import { View, ButtonView, Loading, Text } from "@/components";
import { IProps } from "./type.d";

export const BaseButton = (props: IProps) => {
  const {
    onPress,
    loading,
    titleStyle,
    disabled,
    title,
    style,
    show = true,
  } = props;

  if (!show) {
    return <React.Fragment />;
  }

  const label = (
    <Text style={[styles.title, titleStyle]}>{title ?? props.children}</Text>
  );

  const spinner = <Loading size='small' />;

  return (
    <View>
      <ButtonView
        onPress={onPress}
        style={[styles.button, style]}
        disabled={disabled || loading}
        opacity={disabled ? 0.7 : 1}
      >
        {!loading ? label : spinner}
      </ButtonView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 14, fontWeight: "800", color: colors.white },
  button: {
    paddingHorizontal: 25,
    paddingVertical: 15,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
});
