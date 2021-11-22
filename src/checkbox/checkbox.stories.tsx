import React from "react";
// import Card from "../card/card";
import Code from "../Code/Code";
import { Codes } from "../Code/Code.stories";
import CheckBox from "./checkbox";

export default {
  title: "CheckBox"
};

export const CheckBoxs = () => {
  return (
    <div className="d-flex justify-content-center flex-column">
      <Code width="w-50" code={'<CheckBox >CheckBox</CheckBox>'}>
        <CheckBox id="checkbox1">CheckBox</CheckBox>
      </Code>
      <Code width="w-50" code={'<CheckBox >CheckBox</CheckBox>'}>
        <CheckBox checked id="checkbox2">CheckBox Checked</CheckBox>
      </Code>

      <Code width="w-50" code={'<CheckBox >CheckBox</CheckBox>'}>
        <CheckBox checked disabled>CheckBox checked disabled</CheckBox>
      </Code>

      <Code width="w-50" code={'<CheckBox >CheckBox</CheckBox>'}>
        <CheckBox disabled>CheckBox disabled</CheckBox>
      </Code>

    </div>




  )
}

export const CheckBoxGroup = () => {
  return (
    <Code width="w-50" code={`<CheckBox name="group">Value 1</CheckBox>
    <CheckBox name="group">Value 2</CheckBox>
    <CheckBox name="group">Value 3</CheckBox>`}>
      <div className="d-flex justify-content-center flex-column">
        <CheckBox name="group" id="checkbox1">Value 1</CheckBox>
        <CheckBox name="group" id="checkbox2">Value 2</CheckBox>
        <CheckBox name="group" id="checkbox3">Value 3</CheckBox>
      </div>
    </Code>
  )
}



export const MultiCheckBoxGroup = () => {
  const radioList = [...Array(10).keys()]
  return (
    <Code width="w-50" code={`<div className="d-flex justify-content-start flex-row flex-wrap">
    {checkboxList.map((i) => <CheckBox name="checkbox">Checkbox {i + 1}</CheckBox>)}
  </div>`}>
      <div className="d-flex justify-content-start flex-row flex-wrap col-lg-6">
        {radioList.map((i) => <CheckBox name="checkbox">Checkbox {i + 1}</CheckBox>)}
      </div>
    </Code>
  )
}