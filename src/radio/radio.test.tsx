import React from "react";
import { render } from "@testing-library/react";
import Radio from "./radio";

describe("Radio Component", () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'test'
    };
  });

  const renderComponent = () => render(<Radio {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("radio-test");

    expect(testComponent).toHaveAttribute("name", 'test');
  });
});
