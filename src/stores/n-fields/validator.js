import { getError } from "@/validator";

export const validator = (values) => {
  const errors = {};
  const { n } = values;
  errors.n = getError(n, ["required", "isNumberFormat"]);

  return errors;
};
