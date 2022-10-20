import axios from "axios";
import { getEndpoint } from "lib/getEndpoint";

export async function getServices() {
  const { path, method } = getEndpoint("getServices");

  try {
    const response = await axios({ url: path, method });
    console.log("axios getServices response: ", response);
  } catch (error) {
    console.error("axios getServices error: ", error);
  }
}

const api = {
  getServices,
};

export default api;
