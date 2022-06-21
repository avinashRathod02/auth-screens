import { connect } from "react-redux";
import { getFormValues, reduxForm } from "redux-form";
import Login from "./login";
import { LOGIN_FORM } from "stores/auth/types";
import { loginValidator as validate } from "stores/auth/validator";

const mapStateToProps = (state) => ({
  formValues: getFormValues(LOGIN_FORM)(state) || {},
  initialValues: {
    username: "practical@gmail.com",
    password: "user@123",
    url: "user.techno.com",
  },
});

const LoginForm = reduxForm({ form: LOGIN_FORM, validate })(Login);

export default connect(mapStateToProps)(LoginForm);
