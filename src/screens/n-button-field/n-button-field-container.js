import { connect } from "react-redux";
import { getFormValues, reduxForm } from "redux-form";
import NButtonField from "./n-button-field";
import { validator as validate } from "stores/n-fields/validator";
import { N_FIELD_FORM } from "@/stores/n-fields/types";

const mapStateToProps = (state) => ({
  formValues: getFormValues(N_FIELD_FORM)(state) || {},
  initialValues: { n: null },
});

const NButtonFieldForm = reduxForm({ form: N_FIELD_FORM, validate })(
  NButtonField
);

export default connect(mapStateToProps)(NButtonFieldForm);
