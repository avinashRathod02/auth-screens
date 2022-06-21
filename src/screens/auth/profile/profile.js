import { View, StyleSheet } from "react-native";
import React from "react";
import { Header } from "@/components";

import colors from "@/colors";
import { SCREEN_HEIGHT } from "@/utils";
import ProfileDetails from "./profile-details";

export default (props) => {
  const goBack = () => props.navigation.goBack();
  return (
    <>
      <Header
        backgroundColor={colors.primary}
        title='My Profile'
        leftIconPress={goBack}
      />
      <View style={styles.cont}>
        <View style={styles.white} />
      </View>
      <ProfileDetails {...props} />
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    backgroundColor: colors.primary,
    alignSelf: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  white: {
    backgroundColor: colors.background,
    width: "100%",
    alignSelf: "center",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderTopEndRadius: 160,
    borderTopStartRadius: 160,
    height: SCREEN_HEIGHT * 0.8,
  },
});
