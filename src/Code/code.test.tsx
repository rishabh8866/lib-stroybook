import React from "react";
import { render } from "@testing-library/react";
import Code from "./code";

describe("Code Component", () => {

  const renderComponent = () => render(<Code width="w-50" code={'<input type="text" />'}>
  <input type="text" />
</Code>);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("code");

    expect(testComponent).toHaveClass("d-flex");
  });
});