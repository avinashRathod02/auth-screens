import { View, Text } from "react-native";
import React from "react";
import { BaseButton, BaseInput, Header } from "@/components";
import { Field } from "redux-form";
import { routes } from "@/navigation";
import { hasTextLength } from "@/utils";

export default (props) => {
  const {
    formValues: { n },
    navigation,
    handleSubmit,
  } = props;
  const goBack = () => navigation.goBack();
  const goToButtonScreen = () => {
    if (n > 0) navigation.navigate(routes.N_BUTTONS);
  };
  return (
    <>
      <Header leftIconPress={goBack} title='N field' />
      <View>
        <Field
          component={BaseInput}
          name='n'
          label='Number'
          placeholder='Enter A Number'
        />
        <BaseButton
          onPress={handleSubmit(goToButtonScreen)}
          title={
            hasTextLength(n) ? `Generate ${n} Buttons` : "Generate Buttons"
          }
        />
      </View>
    </>
  );
};
