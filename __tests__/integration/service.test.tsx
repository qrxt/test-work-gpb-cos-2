import React from "react";
import { waitFor } from "@testing-library/react";
import { render } from "__tests__/test-utils";
import { ServiceContainer } from "components/Service";
import servicePage from "__tests__/locators/servicePage";
import ServicePage from "components/pages/ServicePage";
import { server } from "../mocks/server";
import { id, errorResponseId, service } from "../mocks/handlers/service";

describe("Services page", () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  test("should render service page correctly (layout)", async () => {
    const result = await waitFor(() => render(<ServicePage />));
    const page = servicePage(result.baseElement);

    expect(page.pageWrapper()).toBeInTheDocument();
  });

  test("should render service correctly (failure)", async () => {
    const result = await waitFor(() =>
      render(<ServiceContainer serviceId={errorResponseId} />)
    );
    const page = servicePage(result.baseElement);

    expect(page.heading()).toHaveTextContent("Услуга ...");
    await waitFor(() => expect(page.errorMessage()).toBeInTheDocument());
    expect(page.errorRepeatRequestButton()).toHaveTextContent("Повторить");
  });

  test("should render service correctly (loading)", async () => {
    const result = await waitFor(() =>
      render(<ServiceContainer serviceId={id} />)
    );
    const page = servicePage(result.baseElement);

    expect(page.loadingIndicator()).toBeInTheDocument();
    expect(page.loadingIndicatorSkeleton()).toBeInTheDocument();
  });

  test("should render service correctly (success)", async () => {
    const result = await waitFor(() =>
      render(<ServiceContainer serviceId={id} />)
    );
    const page = servicePage(result.baseElement);

    await waitFor(() => expect(page.heading()).toHaveTextContent("Service#1"));
    expect(page.priceHeading()).toHaveTextContent("Цена");
    expect(page.priceValue()).toHaveTextContent(String(service.price));
    expect(page.descriptionHeading()).toHaveTextContent("Описание услуги");
    expect(page.descriptionValue()).toHaveTextContent(service.content);
  });
});
