// TODO: move url base to config
// TODO: move endpoints list to config

// TODO: move mock server port to config
const mockServerPort = 7070;
const base = `http://localhost:${mockServerPort}/api`;

interface Endpoint {
  path: string;
  method: string;
}

interface Endpoints {
  [key: string]: Endpoint;
}

export const endpoints: Endpoints = {
  getServices: {
    path: `${base}/services`,
    method: "GET",
  },

  getService: {
    path: `${base}/services/{serviceId}`,
    method: "GET",
  },
};

function insertParams(url: string, params: any) {
  const re = /{(\w*)}/g;

  return url.replace(re, (_, param) => params[param]);
}

export function getEndpoint(name: string, params?: object) {
  const endpoint = endpoints[name];

  if (!endpoint) {
    throw new Error(`There is no endpoint with name ${name}`);
  }

  return {
    ...endpoint,
    path: params ? insertParams(endpoint.path, params) : endpoint.path,
  };
}
