import React, { Fragment } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { navigatorOptions as options } from "../navigation-action";
import { routes } from "../navigation-routes";
import Tasks from "@/screens/tasks";
import Profile from "@/screens/auth/profile";
import NButtons from "@/screens/n-buttons";
import NButtonField from "@/screens/n-button-field";

const Stack = createStackNavigator();

export const CommonNavigator = (props) => {
  return (
    <Fragment>
      <Stack.Screen
        name={routes.PROFILE}
        component={Profile}
        options={options}
      />
      <Stack.Screen name={routes.TASKS} component={Tasks} options={options} />
      <Stack.Screen name={routes.N_BUTTONS} component={NButtons} />
      <Stack.Screen
        name={routes.N_BUTTONS_FIELDS}
        component={NButtonField}
        options={options}
      />
    </Fragment>
  );
};
