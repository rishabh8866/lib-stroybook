import React from "react";
import { render } from "@testing-library/react";
import Datepicker from "./datepicker";

describe("Code Component", () => {
  let props;

  beforeEach(() => {
    props = {
      textBoxsize: "sm",
      name: 'test'
    };
  });

  const renderComponent = () => render(<Datepicker {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("datePicker");

    expect(testComponent).toBeDefined();
  });
});