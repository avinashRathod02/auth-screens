import { connect } from "react-redux";
import Navigation from "./navigation";

const mapStateToProps = (state) => {
  return {
    isLogin: state?.auth?.isLogin,
  };
};

export const ApplicationNavigator = connect(mapStateToProps)(Navigation);
