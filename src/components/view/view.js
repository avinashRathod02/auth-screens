import React from "react";
import { View as RNView } from "react-native";
import { IProps } from "./type.d";

export default (props: IProps) => {
  const { show = true } = props;
  if (!show) {
    return <React.Fragment />;
  }
  return <RNView {...props}>{props.children}</RNView>;
};
