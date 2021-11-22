import React from "react";
import { render } from "@testing-library/react";
import TextBox from "./textbox";

describe("Test Component", () => {
  let props;

  beforeEach(() => {
    props = {
      textBoxsize: "sm",
      name: 'test'
    };
  });

  let renderComponent = () => render(<TextBox {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("textbox-test");

    expect(testComponent).toHaveAttribute("name", 'test');
  });


  it("should have primary className with default props", () => {
    renderComponent = () => render(<TextBox {...props} isInputGroup={true} value="Textbox with Icon"  placeholder="Textbox with Icon" icon="$" iconPlace="both" />);
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("textbox-test");

    expect(testComponent).toHaveAttribute("name", 'test');
    expect(testComponent).toHaveClass("input-control");
  });
});
