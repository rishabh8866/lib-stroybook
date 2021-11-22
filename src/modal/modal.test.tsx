import React from "react";
import { render } from "@testing-library/react";
import Modal from "./modal";

describe("Code Component", () => {
  let props;

  beforeEach(() => {
    props = {
        buttons: [
            {label: 'OK', onClick: () => {}},
            {label: 'Cancel', onClick: () => {}},
        ],
        open: true,
        title: "test",
        onClose: () => {}
    };
  });

  const renderComponent = () => render(<Modal {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("model");

    expect(testComponent).toBeDefined();
  });
});