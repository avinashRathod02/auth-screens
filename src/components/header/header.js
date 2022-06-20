import React from "react";
import { StatusBar, StyleSheet } from "react-native";
import { View, AssetSvg, Text } from "@/components";
import { ButtonView } from "../button-view";
export default (props) => {
  const { leftIconPress, leftComponent, title, titleOnPress } = props;

  const RIGHT_COMPONENT = <View style={styles.icon} />;
  const LEFT_COMPONENT = () => {
    if (!leftIconPress) {
      return <View style={styles.icon} />;
    }
    if (leftComponent) {
      return leftComponent;
    }
    return (
      <View style={styles.icon}>
        <ButtonView onPress={leftIconPress}>
          <AssetSvg height={11} width={11} name={AssetSvg.icons.left_arrow} />
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
    marginTop: (StatusBar.currentHeight / 100) * 7 + 25,
    width: "4.5%",
    marginBottom: "2.5%",
    backgroundColor: colors.white,
    flexDirection: "row",
    justifyContent: "center",
  },
});
