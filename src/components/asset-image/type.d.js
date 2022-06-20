import {
  StyleProp,
  ImageStyle,
  ImageSourcePropType,
  ImageProps,
} from "react-native";

export interface IProps {
  style?: StyleProp<ImageStyle> | any;
  uri?: boolean;
  imageProps?: ImageProps | any;
  source: ImageSourcePropType | any;
  show?: boolean;
}
