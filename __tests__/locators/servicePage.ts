import { findByTestId } from "@testing-library/react";

export default function servicePage(nodeElement: HTMLElement) {
  return {
    nodeElement,
    pageWrapper() {
      return findByTestId(nodeElement, "service-page");
    },
    heading() {
      return findByTestId(nodeElement, "services-wrapper-heading");
    },

    // loading
    loadingIndicator() {
      return findByTestId(nodeElement, "loading-indicator");
    },
    loadingIndicatorSkeleton() {
      return findByTestId(nodeElement, "service-loading-indicator-skeleton");
    },

    // failure
    errorWrapper() {
      return findByTestId(nodeElement, "service-error-wrapper");
    },
    errorMessage() {
      return findByTestId(nodeElement, "service-error-message");
    },
    errorRepeatRequestButton() {
      return findByTestId(nodeElement, "service-error-repeat-request-button");
    },

    // service data
    priceHeading() {
      return findByTestId(nodeElement, "service-price-heading");
    },
    priceValue() {
      return findByTestId(nodeElement, "service-price-value");
    },

    descriptionHeading() {
      return findByTestId(nodeElement, "service-description-heading");
    },
    descriptionValue() {
      return findByTestId(nodeElement, "service-description-value");
    },
  };
}
