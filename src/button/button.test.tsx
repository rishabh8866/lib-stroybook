import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

describe("Button Component", () => {
  let props;

  beforeEach(() => {
    props = {
        btnType: "primary",
      name: 'test',
       btnSize:"lg",
       isOutline: true
    };
  });
  const renderComponent = () => render(<Button {...props} >Hello</Button>);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("button-test");

    expect(testComponent).toHaveAttribute("name", 'test');
  });
});