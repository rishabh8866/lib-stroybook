import React from "react";
import { render } from "@testing-library/react";
import Chat from "./chat";

describe("Card Component", () => {
  let props;

  beforeEach(() => {
    props = {
      textBoxsize: "sm",
      name: 'test'
    };
  });

  const renderComponent = () => render(<Chat {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("card");

    expect(testComponent).toBeDefined();
  });
});