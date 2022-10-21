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

export async function getService(id: string) {
  const { path, method } = getEndpoint("getService", { serviceId: id });

  return axios({ url: path, method })
    .then((response) => {
      console.log("axios getService response: ", response);

      return response;
    })
    .catch((error) => {
      console.error("axios getService error: ", error);
    });
}

const api = {
  getServices,
  getService,
};

export default api;
