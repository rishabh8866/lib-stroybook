import React from "react";
import { render } from "@testing-library/react";
import Table from "./table";

describe("Code Component", () => {
  let props;

  beforeEach(() => {
    props = {
      name: 'test',

      rows_1: [
          { id: "1", name: "Jon" },
          { id: "2", name: "Steve" },
          { id: "3", name: "John" },
      ],
      
      cols: [
          { key: "id", headerValue: "Id", sort: true },
          { key: "name", headerValue: "IdName" },
      ],
      className:"table-success"
    };
  });

  const renderComponent = () => render(<Table {...props} search={true} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("table");

    expect(testComponent).toHaveClass("table-success");
  });
});