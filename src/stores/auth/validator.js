import { getError } from "@/validator";

export const loginValidator = (values) => {
  const errors = {};
  const { username, password, url } = values;
  errors.username = getError(username, ["required"]);
  errors.password = getError(password, ["required", "minNumberRequired"], {
    minNumber: 8,
  });
  errors.url = getError(url, ["required", "urlFormat"]);
  return errors;
};
