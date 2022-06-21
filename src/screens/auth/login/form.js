import { View, StyleSheet } from "react-native";
import React from "react";
import { AssetImage, BaseButton, BaseInput, Header } from "@/components";
import { Field } from "redux-form";
import { routes } from "@/navigation";
import { login } from "@/stores/auth/actions";
import colors from "@/colors";

export default (props) => {
  const { navigation, handleSubmit, dispatch } = props;
  const onSubmit = (values) => {
    const onSuccess = (data) => {
      navigation.navigate(routes.PROFILE, { ...data });
    };
    const onFail = (e) => console.log({ e });
    dispatch(login(values, onSuccess, onFail));
  };
  return (
    <View style={styles.cont}>
      <AssetImage source={AssetImage.images.logo} />
      <Field
        leftIcon={AssetImage.images.link}
        component={BaseInput}
        name='url'
        label='Url'
        placeholder='Enter url'
      />
      <Field
        leftIcon={AssetImage.images.user}
        component={BaseInput}
        name='username'
        label='Username'
        placeholder='Enter username'
      />
      <Field
        leftIcon={AssetImage.images.password}
        component={BaseInput}
        name='password'
        label='Password'
        minNumber={7}
        placeholder='Enter password'
      />
      <BaseButton onPress={handleSubmit(onSubmit)} title={"Submit"} />
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    paddingVertical: "10%",
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: colors.gray1,
    marginTop: "30%",
    backgroundColor: colors.white,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
  },
});
