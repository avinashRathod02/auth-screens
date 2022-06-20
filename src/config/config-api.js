import DeviceInfo from "react-native-device-info";

const ENDPOINT = "http://demo.stapel.in";
const ENDPOINT_API = "http://demo.stapel.in";
export default {
  ENDPOINT,
  ENDPOINT_API,
  APP_VERSION: DeviceInfo.getVersion(),
};
