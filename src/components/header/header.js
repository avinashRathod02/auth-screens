import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { View, AssetImage, Text } from "@/components";
import { ButtonView } from "../button-view";
import colors from "@/colors";
export default (props) => {
  const { leftIconPress, title, titleOnPress } = props;

  const RIGHT_COMPONENT = <View style={styles.icon} />;
  const LEFT_COMPONENT = () => {
    if (!leftIconPress) {
      return <View style={styles.icon} />;
    }
    return (
      <View style={styles.icon}>
        <ButtonView onPress={leftIconPress}>
          <AssetImage source={AssetImage.images.back} />
        </ButtonView>
      </View>
    );
  };

  const CENTER_COMPONENT = (
    <View style={[styles.icon, { flex: 3 }]}>
      <ButtonView onPress={() => titleOnPress?.()}>
        <Text show={title}>{title}</Text>
      </ButtonView>
    </View>
  );

  return (
    <View style={styles.cont}>
      <StatusBar barStyle='light-content' />
      {LEFT_COMPONENT()}
      {CENTER_COMPONENT}
      {RIGHT_COMPONENT}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "87%",
    alignSelf: "center",
  },
  icon: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cont: {
    paddingTop: (StatusBar.currentHeight / 100) * 7 + 40,
    width: "100%",
    paddingBottom: "2.5%",
    backgroundColor: colors.primary,
    flexDirection: "row",
    justifyContent: "center",
  },
});
