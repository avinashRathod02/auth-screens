import { trim } from "lodash";
import { URL_REGEX } from "./regex";

export function getError(value, errorTypes, options) {
  const { minNumber, maxNumber, maxCharacter } = options;

  const errorTypeMap = {
    required: () => (!trim(value) ? "This field is required" : null),

    minNumberRequired: () =>
      value <= minNumber ? `Minimum ${minNumber} number required` : null,

    urlFormat: () => (URL_REGEX.test(value) ? null : "Please Enter valid url"),
  };

  const errorType = errorTypes.find(
    (error) => errorTypeMap[error] && errorTypeMap[error]()
  );

  return errorType ? errorTypeMap[errorType]() : null;
}
