import React, { Component } from "react";
import { Image } from "react-native";
import Back from "@/assets/images/back.png";
import Call from "@/assets/images/call.png";
import Camera from "@/assets/images/camera.png";
import Logo from "@/assets/images/logo.png";
import Link from "@/assets/images/link.png";
import Location from "@/assets/images/location.png";
import Password from "@/assets/images/password.png";
import User from "@/assets/images/user.png";
import Dp from "@/assets/images/dp.png";
import { IProps } from "./type.d";

export class AssetImage extends Component<IProps> {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static images = {
    back: Back,
    call: Call,
    camera: Camera,
    link: Link,
    location: Location,
    logo: Logo,
    password: Password,
    user: User,
    dp: Dp,
  };

  render() {
    const { uri, source, style, imageProps, show = true } = this.props;
    if (!show) {
      return <React.Fragment />;
    }

    return (
      <Image
        source={uri ? { uri: source } : source}
        style={style}
        resizeMode='contain'
        {...imageProps}
      />
    );
  }
}
