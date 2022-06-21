import { View, StyleSheet } from "react-native";
import { getFormValues } from "redux-form";
import { N_FIELD_FORM } from "@/stores/n-fields/types";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { filter, range, find, map, sample } from "lodash";
import Button from "./button";
import { SCREEN_HEIGHT } from "@/utils";
import { Header } from "@/components";

const NButtons = (props) => {
  const {
    navigation,
    formValues: { n },
  } = props;

  const [clickedButtonList, setClickedButtonList] = useState([]);

  useEffect(() => {
    const buttons = range(n).map((item, index) => ({
      id: index,
      clicked: false,
    }));

    const renderButtons = map(buttons, (item) => {
      const isClicked = find(clickedButtonList, (id) => id === item?.id);
      return item?.id === isClicked ? { ...item, clicked: true } : item;
    });
    setClickedButtonList(renderButtons);
    return () => {};
  }, [n]);

  const onPress = (id) => {
    const formattedItem = clickedButtonList.map((item) => {
      return {
        ...item,
        clicked: item.id === id ? true : item.clicked,
      };
    });
    setClickedButtonList(formattedItem);
  };

  const random = sample(filter(clickedButtonList, { clicked: false }));

  return (
    <>
      <Header leftIconPress={navigation.goBack} />
      <ScrollView>
        <View style={styles.cont}>
          {map(clickedButtonList, (item) => (
            <Button {...item} onPress={onPress} random={random} />
          ))}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  cont: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flex: 1,
    height: SCREEN_HEIGHT * 0.9,
    alignSelf: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
});

const mapStateToProps = (state) => ({
  formValues: getFormValues(N_FIELD_FORM)(state) || {},
});

export default connect(mapStateToProps)(NButtons);
