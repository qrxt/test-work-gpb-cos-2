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
};

export function getEndpoint(name: string, params?: object) {
  const endpoint = endpoints[name];

  if (!endpoint) {
    throw new Error(`There is no endpoint with name ${name}`);
  }

  return endpoint;
}
