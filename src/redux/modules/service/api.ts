import axios from "axios";
import { getEndpoint } from "lib/getEndpoint";

export async function getService(id: string) {
  const { path, method } = getEndpoint("getService", { serviceId: id });

  console.log(path);
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
  getService,
};

export default api;
