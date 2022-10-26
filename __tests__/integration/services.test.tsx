import React from "react";
import { waitFor } from "@testing-library/react";
import { render } from "__tests__/test-utils";
import { server } from "__tests__/mocks/server";
import servicesPage from "../locators/servicesPage";
import ServicesPage from "components/pages/ServicesPage";
import { services } from "__tests__/mocks/handlers/services";

describe("Services page", () => {
  const serverInstance = server;
  beforeAll(() => serverInstance.listen());
  afterEach(() => serverInstance.resetHandlers());
  afterAll(() => serverInstance.close());

  test("should render service page correctly (layout)", async () => {
    const result = await waitFor(() => render(<ServicesPage />));
    const page = await waitFor(() => servicesPage(result.baseElement));

    expect(await page.pageWrapper()).toBeInTheDocument();
  });

  test("should render service correctly (loading)", async () => {
    const result = await waitFor(() => render(<ServicesPage />));
    const page = await waitFor(() => servicesPage(result.baseElement));

    expect(await page.loadingIndicator()).toBeInTheDocument();
    expect(await page.loadingIndicatorSkeleton()).toBeInTheDocument();
  });

  test("should render service page correctly (services list)", async () => {
    const result = await waitFor(() => render(<ServicesPage />));
    const page = await waitFor(() => servicesPage(result.baseElement));

    expect(await page.servicesList()).toBeInTheDocument();

    const listItems = await page.servicesListItems();
    expect(listItems).toHaveLength(services.length);

    expect(listItems[0]).toHaveTextContent(services[0].name);
  });

  test("should render service correctly (failure)", async () => {
    server.close();
    const result = await waitFor(() => render(<ServicesPage />));
    const page = await waitFor(() => servicesPage(result.baseElement));

    expect(await page.heading()).toHaveTextContent("Услуги");
    expect(await page.errorMessage()).toBeInTheDocument();
    expect(await page.errorRepeatRequestButton()).toHaveTextContent(
      "Повторить"
    );
  });
});
