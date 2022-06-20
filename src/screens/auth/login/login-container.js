import { connect } from "react-redux";
import { getFormValues, reduxForm } from "redux-form";
import Login from "./login";
import { LOGIN_FORM } from "stores/auth/types";
import { loginValidator as validate } from "stores/auth/validator";

const mapStateToProps = (state) => ({
  formValues: getFormValues(LOGIN_FORM)(state) || {},
  initialValues: { username: null, password: null, url: null },
});

const LoginForm = reduxForm({ form: LOGIN_FORM, validate })(Login);

export default connect(mapStateToProps)(LoginForm);
