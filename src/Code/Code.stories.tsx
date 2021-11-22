import React from "react";
import Code from "./Code";

export default {
  title: "Code"
};

export const Codes = () => {
    return (
      <div className="d-flex justify-content-center"> 
      <Code width="w-50" code={'<input type="text" />'}>
        <input type="text" />
      </Code>
      </div>
    )
  }