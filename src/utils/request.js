import axios from "axios";
import env from "@/config/config-api";
import { hasValue } from "utils/condition";
export default class Request {
  static post(path, data, options = {}) {
    return this.request({ method: "POST", path, data, ...options });
  }

  static createFormData = (data) => {
    const formData = new FormData();
    if (!hasValue(data)) {
      return formData;
    }
    for (const key in data) {
      data.hasOwnProperty(key) && formData.append(key, data[key]);
    }
    return formData;
  };

  static async request({ path, method, data }) {
    const url = `${env.ENDPOINT_API}${path}`;

    const defaultHeader = {
      Accept: "application/json",
      "Content-Type": "application/json",
    };

    return axios({
      method,
      url,
      data,
      headers: defaultHeader,
    })
      .then(function (response) {
        const { data } = response;
        if (data && data.hasOwnProperty("error")) {
          throw { response: { data: { ...data, status: 422 } } };
        }
        return data;
      })
      .catch(function ({ response }) {
        throw response;
      });
  }
}
