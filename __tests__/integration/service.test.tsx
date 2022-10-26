import React from "react";
import { waitFor } from "@testing-library/react";
import { render } from "__tests__/test-utils";
import { ServiceContainer } from "components/Service";
import servicePage from "__tests__/locators/servicePage";
import ServicePage from "components/pages/ServicePage";
import { server } from "__tests__/mocks/server";
import { id, errorResponseId, service } from "__tests__/mocks/handlers/service";

describe("Services page", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("should render service page correctly (layout)", async () => {
    const result = await waitFor(() => render(<ServicePage />));
    const page = servicePage(result.baseElement);

    expect(await page.pageWrapper()).toBeInTheDocument();
  });

  test("should render service correctly (failure)", async () => {
    const result = await waitFor(() =>
      render(<ServiceContainer serviceId={errorResponseId} />)
    );
    const page = await waitFor(() => servicePage(result.baseElement));

    expect(await page.heading()).toHaveTextContent("Услуга ...");
    expect(await page.errorMessage()).toBeInTheDocument();
    expect(await page.errorRepeatRequestButton()).toHaveTextContent(
      "Повторить"
    );
  });

  test("should render service correctly (loading)", async () => {
    const result = await waitFor(() =>
      render(<ServiceContainer serviceId={id} />)
    );
    const page = await waitFor(() => servicePage(result.baseElement));

    expect(await page.loadingIndicator()).toBeInTheDocument();
    expect(await page.loadingIndicatorSkeleton()).toBeInTheDocument();
  });

  test("should render service correctly (success)", async () => {
    const result = await waitFor(() =>
      render(<ServiceContainer serviceId={id} />)
    );
    const page = servicePage(result.baseElement);

    await waitFor(async () =>
      expect(await page.priceHeading()).toBeInTheDocument()
    );
    expect(await page.heading()).toHaveTextContent("Service#1");
    expect(await page.priceHeading()).toHaveTextContent("Цена");
    expect(await page.priceValue()).toHaveTextContent(String(service.price));
    expect(await page.descriptionHeading()).toHaveTextContent(
      "Описание услуги"
    );
    expect(await page.descriptionValue()).toHaveTextContent(service.content);
  });
});
