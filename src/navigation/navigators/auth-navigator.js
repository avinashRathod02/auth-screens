import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { routes } from "../navigation-routes";
import { navigatorOptions as options } from "../navigation-action";
import Login from "@/screens/auth/login";
import Tasks from "@/screens/tasks";
const AuthStack = createStackNavigator();

export const AuthNavigator = (props) => {
  if (props.isLogin) {
    return <React.Fragment />;
  }
  return (
    <React.Fragment>
      <AuthStack.Screen
        name={routes.LOGIN}
        component={Login}
        options={options}
      />
      <AuthStack.Screen
        name={routes.TASKS}
        component={Tasks}
        options={options}
      />
    </React.Fragment>
  );
};
