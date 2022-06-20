import React from "react";
import { Text as RNText } from "react-native";
import { IProps } from "./type.d";

export default class Text extends React.Component<IProps> {
  render() {
    const { show = true, style, text, children } = this.props;
    if (!show) {
      return <React.Fragment />;
    }

    return (
      <RNText allowFontScaling={false} {...this.props} style={style}>
        {text ?? children}
      </RNText>
    );
  }
}
