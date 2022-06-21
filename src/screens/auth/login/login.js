import { View, StyleSheet } from "react-native";
import React from "react";
import { Header } from "@/components";
import Form from "./form";
import colors from "@/colors";
import { SCREEN_HEIGHT } from "@/utils";

export default (props) => {
  const goBack = () => props.navigation.goBack();

  return (
    <>
      <Header backgroundColor={colors.background} leftIconPress={goBack} />
      <View style={styles.cont}>
        <View style={styles.red} />
      </View>
      <Form {...props} />
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.background,
    alignSelf: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  red: {
    backgroundColor: colors.primary,
    width: "100%",
    height: SCREEN_HEIGHT * 0.6,
  },
});
