import { findAllByTestId, findByTestId } from "@testing-library/react";

export default function settingsForm(nodeElement: HTMLElement) {
  return {
    nodeElement,
    pageWrapper() {
      return findByTestId(nodeElement, "services-page");
    },
    heading() {
      return findByTestId(nodeElement, "services-wrapper-heading");
    },

    // loading
    loadingIndicator() {
      return findByTestId(nodeElement, "loading-indicator");
    },
    loadingIndicatorSkeleton() {
      return findByTestId(nodeElement, "services-loading-indicator-skeleton");
    },

    // failure
    errorWrapper() {
      return findByTestId(nodeElement, "services-error-wrapper");
    },
    errorMessage() {
      return findByTestId(nodeElement, "services-error-message");
    },
    errorRepeatRequestButton() {
      return findByTestId(nodeElement, "services-error-repeat-request-button");
    },

    // services data
    servicesList() {
      return findByTestId(nodeElement, "services-list");
    },
    servicesListItems() {
      return findAllByTestId(nodeElement, "service-list-item");
    },
  };
}
