import { trim } from "lodash";
import { URL_REGEX } from "./regex";

export function getError(value, errorTypes, options) {
  const errorTypeMap = {
    required: () => (!trim(value) ? "This field is required" : null),

    minNumberRequired: () =>
      value?.length <= options?.minNumber
        ? `Minimum ${options?.minNumber} number required`
        : null,
    isNumberFormat: () => (isNaN(Number(value)) ? "Only Number allowed" : null),

    urlFormat: () => (URL_REGEX.test(value) ? null : "Please Enter valid url"),
  };

  const errorType = errorTypes.find(
    (error) => errorTypeMap[error] && errorTypeMap[error]()
  );

  return errorType ? errorTypeMap[errorType]() : null;
}
