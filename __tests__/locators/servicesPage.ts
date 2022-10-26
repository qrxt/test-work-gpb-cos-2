import { fireEvent, getByTestId } from "@testing-library/react";

export default function settingsForm(nodeElement: HTMLElement) {
  return {
    nodeElement,
    pageWrapper() {
      return getByTestId(nodeElement, "services-page");
    },
    heading() {
      return getByTestId(nodeElement, "services-wrapper-heading");
    },
  };
}
