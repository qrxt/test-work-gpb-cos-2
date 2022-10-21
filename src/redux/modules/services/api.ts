import axios from "axios";
import { getEndpoint } from "lib/getEndpoint";

export async function getServices() {
  const { path, method } = getEndpoint("getServices");

  return axios({ url: path, method })
    .then((response) => {
      console.log("axios getServices response: ", response);

      return response;
    })
    .catch((error) => {
      console.error("axios getServices error: ", error);
    });
}

const api = {
  getServices,
};

export default api;
