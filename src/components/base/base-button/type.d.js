import { StyleProp, ViewStyle, TextStyle } from "react-native";

export interface IProps {
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  title?: String;
  show?: boolean;
  style?: StyleProp<ViewStyle> | any;
  buttonStyle?: StyleProp<ViewStyle> | any;
  titleStyle?: StyleProp<TextStyle> | any;
}
