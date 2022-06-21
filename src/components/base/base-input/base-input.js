import React, { Component } from "react";
import { TextInput, StyleSheet } from "react-native";
import { View, Text, AssetImage } from "@/components";
import colors from "@/colors";
import { hasValue } from "utils/condition";
import { BaseError } from "./base-error";

export class BaseInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      inputVal: "",
    };
  }

  componentDidMount() {
    const { input } = this.props;
    this.initialValue(input?.value);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps?.input?.value !== this.props.input?.value)
      this.initialValue(nextProps?.input?.value);
  }

  initialValue = (value) => {
    this.setState({ inputVal: `${value}` });
  };

  isNumber = (text) => !isNaN(parseFloat(text)) && isFinite(text);

  onErrorCallback = (error) => {
    this.props.onError?.(hasValue(error));
  };
  toggleFocus = (status) => {
    this.setState({ active: status });
  };

  onChangeValue = (text) => {
    this.props.onChangeText?.(text);
  };

  render() {
    const {
      input: { onChange, onFocus },
      setActivity,
      show = true,
      leftIcon,
      placeholder,
      onSubmitEditing,
      label,
    } = this.props;

    if (!show) {
      return <React.Fragment />;
    }

    let methods: any = {
      onFocus: (event) => {
        this.toggleFocus(true);
        setActivity?.(true);
        onFocus?.(event);
      },
      onEndEditing: () => this.toggleFocus(false),
      onBlur: () => this.toggleFocus(false),
    };

    return (
      <View style={styles.container}>
        <Text text={label} style={styles.label} />
        <View style={styles.inputCon}>
          <View style={styles.iconCon} show={leftIcon}>
            <AssetImage style={styles.icon} source={leftIcon} />
          </View>
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor={colors.gray2}
            allowFontScaling={false}
            onSubmitEditing={(e) => onSubmitEditing?.(e.nativeEvent.text)}
            {...methods}
            onChangeText={(enteredValue) => {
              this.setState({ inputVal: enteredValue });
              this.onChangeValue?.(enteredValue);
              onChange?.(enteredValue);
            }}
          />
        </View>
        <BaseError {...this.props} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "87%",
    alignSelf: "center",
  },
  iconCon: {
    width: "12%",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 20,
    height: 20,
  },
  input: { flex: 1 },
  inputCon: {
    marginTop: "4.5%",
    marginBottom: "2.5%",
    backgroundColor: colors.white,
    paddingVertical: "1.9%",
    borderWidth: 1,
    borderColor: colors.gray2,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
});
