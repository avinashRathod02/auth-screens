import React from "react";
import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "./navigation-routes";
import colors from "@/colors";
import { CommonNavigator, AuthNavigator } from "./navigators";

const Stack = createStackNavigator();

export default (props) => {
  const { isLogin = false } = props;
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: colors.background,
    },
  };

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        headerMode='none'
        initialRouteName={isLogin ? routes.PROFILE : routes.TASKS}
      >
        {CommonNavigator({ isLogin })}
        {AuthNavigator({ isLogin })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
