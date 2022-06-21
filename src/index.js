import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { store, persistor } from "@/stores";
import { ApplicationNavigator } from "./navigation";
import "react-native-gesture-handler";

export default () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SafeAreaProvider>
          <ApplicationNavigator />
        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
};
