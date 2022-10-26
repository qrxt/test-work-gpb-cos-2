import { fireEvent, getByTestId } from "@testing-library/react";

export default function servicePage(nodeElement: HTMLElement) {
  return {
    nodeElement,
    pageWrapper() {
      return getByTestId(nodeElement, "service-page");
    },
    heading() {
      return getByTestId(nodeElement, "services-wrapper-heading");
    },

    // loading
    loadingIndicator() {
      return getByTestId(nodeElement, "loading-indicator");
    },
    loadingIndicatorSkeleton() {
      return getByTestId(nodeElement, "service-loading-indicator-skeleton");
    },

    // failure
    errorWrapper() {
      return getByTestId(nodeElement, "service-error-wrapper");
    },
    errorMessage() {
      return getByTestId(nodeElement, "service-error-message");
    },
    errorRepeatRequestButton() {
      return getByTestId(nodeElement, "service-error-repeat-request-button");
    },

    // success
    priceHeading() {
      return getByTestId(nodeElement, "service-price-heading");
    },
    priceValue() {
      return getByTestId(nodeElement, "service-price-value");
    },

    descriptionHeading() {
      return getByTestId(nodeElement, "service-description-heading");
    },
    descriptionValue() {
      return getByTestId(nodeElement, "service-description-value");
    },
  };
}
