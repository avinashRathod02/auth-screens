import React from "react";
import colors from "@/colors";
import { BaseButton } from "@/components";

export default (props) => {
  const { id, clicked, random, onPress } = props;
  const isRandom = random?.id === id;
  const disabled = clicked || !isRandom;
  const backgroundColor = clicked
    ? colors.primary
    : isRandom
    ? colors.blue
    : colors.white;
  const color = isRandom ? colors.white : colors.black;
  return (
    <BaseButton
      key={id}
      disabled={disabled}
      titleStyle={{ color }}
      style={{ backgroundColor }}
      onPress={() => onPress(id)}
      title='Click'
    />
  );
};
