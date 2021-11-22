import React from "react";
import Code from "../Code/Code";
import TestComponent from "./TestComponent";

export default {
  title: "TestComponent"
};

export const Primary = () => 
<Code width="w-50" code={`<TestComponent theme="primary" />`}>
<TestComponent theme="primary" />
      </Code>;

export const Secondary = () => <TestComponent theme="secondary" />;
