import React from "react";
import { render } from "@testing-library/react";
import NavItem from "./navitem";

describe("Code Component", () => {
  let props;

  beforeEach(() => {
    props = {
        list: [
            {label: 'ID: test3456'},
            {label: 'Test, Test'},
            {label: 'test.test@cpa.texas.gov'},
            {label: '1234567890'},
            {label: 'IP: 172.17.9.101'},
            {label: 'My Account'},
            {label: 'User Profile, Password, and Security Questions', divider: true},
            {label: 'Logout'}
          ],
          open: false
    };
  });

  const renderComponent = () => render(<NavItem {...props} />);

  it("should have primary className with default props", () => {
    const { getByTestId } = renderComponent();

    const testComponent = getByTestId("navitem");


    expect(testComponent).toBeDefined();
  });
});