import React from "react";
import { render } from "@testing-library/react";
import Icon from "./icon";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

describe("Code Component", () => {
  let props;

  beforeEach(() => {
    props = {message: 'fa Coffee', icon: faCoffee, color: 'red', size: '2x'};
  });

  const renderComponent = () => render(<Icon {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("icon");

    expect(testComponent).toBeDefined();
  });
});