import React from "react";
import { TouchableOpacity } from "react-native";

export const ButtonView = (props) => {
  const { show = true } = props;
  if (!show) {
    return <React.Fragment />;
  }
  const onPress = () => !props?.disable && props?.onPress?.();
  return (
    <TouchableOpacity activeOpacity={0.7} {...props} onPress={onPress}>
      {props.children}
    </TouchableOpacity>
  );
};
