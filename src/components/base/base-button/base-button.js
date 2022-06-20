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
    buttonStyle,
    disabled,
    style,
    title,
    show = true,
  } = props;

  if (!show) {
    return <React.Fragment />;
  }

  const label = (
    <Text style={[style.title, titleStyle]}>{title ?? props.children}</Text>
  );

  const spinner = <Loading size='small' />;

  return (
    <View>
      <ButtonView
        onPress={onPress}
        style={[styles.button, buttonStyle]}
        disabled={disabled || loading}
        opacity={disabled ? 0.7 : 1}
        {...additionalProps}
      >
        {!loading ? label : spinner}
      </ButtonView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: { fontSize: 14, color: colors.width, fontWeight: 600 },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
    height: 20,
    width: "100%",
  },
});
