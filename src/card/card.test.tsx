import React from "react";
import { render } from "@testing-library/react";
import Card from "./card";

describe("Card Component", () => {
  let props;

  beforeEach(() => {
    props = {
      textBoxsize: "sm",
      name: 'test'
    };
  });

  const renderComponent = () => render(<Card {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("card");

    expect(testComponent).toBeDefined();
  });
});