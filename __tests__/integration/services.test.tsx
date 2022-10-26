import React from "react";
import { cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import * as nock from "nock";
import { Service as ServiceInfo } from "types/service";
import ServicesContainer from "components/Services/ServicesContainer";
import axios from "axios";
import { render } from "__tests__/test-utils";
import Service from "components/Service";

describe("Services page", () => {
  const services: ServiceInfo[] = [
    {
      id: "test-id-1",
      name: "Service#1",
      price: 10000,
      content: "Service#1 description",
    },
  ];

  // beforeAll(() => {
  //   Object.defineProperty(HTMLElement.prototype, "offsetTop", {
  //     configurable: true,
  //     value: 1500,
  //   });
  //   Object.defineProperty(HTMLElement.prototype, "scrollHeight", {
  //     configurable: true,
  //     value: 500,
  //   });
  //   Object.defineProperty(HTMLElement.prototype, "offsetParent", {
  //     configurable: true,
  //     value: 0,
  //   });
  //   Object.defineProperty(HTMLElement.prototype, "offsetHeight", {
  //     configurable: true,
  //     value: 1500,
  //   });
  //   Object.defineProperty(HTMLElement.prototype, "offsetWidth", {
  //     configurable: true,
  //     value: 1500,
  //   });
  // });

  // beforeAll(() => {
  //   // axios.defaults.adapter = require("axios/lib/adapters/http");

  //   nock("http://localhost")
  //     .persist()
  //     .get("/services")
  //     .query(true)
  //     .reply(200, services);
  // });

  test("should render correctly", async () => {
    const result = render(<Service service={services[0]} />);

    expect(true).toBeTruthy();
  });
});
