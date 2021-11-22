import React from "react";
import { render } from "@testing-library/react";
import Select from "./select";

describe("Select Component", () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'test',
      options: [
        { value: 1, label: 'Select 1' },
        { value: 2, label: 'Select 2' },
        { value: 3, label: 'Select 3' },
      ]
    };
  });

  let renderComponent = () => render(<Select {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("select-test");

    expect(testComponent).toHaveAttribute("name", 'test');
  });

  it("should have primary className with default props", () => {
    renderComponent = () => render(<Select {...props} multi={true}/>);
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("select-test");

    expect(testComponent).toBeDefined();
  });
});
