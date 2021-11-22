import React from "react";
import Card from "../card/card";
import Radio from "./radio";
import Code from "../Code/Code";

export default {
  title: "Radio"
};

export const Radios = () => {
  return (
    <div className="d-flex justify-content-center flex-column">
      <Code width="w-50" code={`<Radio name="radio1">CheckBox</Radio>`}>
        <Radio name="radio1" id="radio1">Radio</Radio>
      </Code>
      <Code width="w-50" code={`<Radio checked name="radio1">CheckBox Checked</Radio>`}>
        <Radio checked name="radio1"  id="radio2">Radio Checked</Radio>
      </Code>
      <Code width="w-50" code={`
        <Radio checked disabled>CheckBox checked disabled</Radio>`}>
        <Radio checked disabled>Radio checked disabled</Radio>
      </Code>
      <Code width="w-50" code={`
        <Radio disabled>CheckBox disabled</Radio>`}>
        <Radio disabled>Radio disabled</Radio>
      </Code>
      <Code width="w-50" code={`
        <Radio >CheckBox disabled</Radio>`}>
        <Radio checked disabled>Radio checked disabled</Radio>
      </Code>
    </div>
  )
}

export const RadioGroup = () => {
  return (
    <Code width="w-50" code={`<Radio name="radio">Radio 1</Radio>
      <Radio name="radio">Radio 2</Radio>
      <Radio name="radio">Radio 3</Radio>`}>
      <div className="d-flex justify-content-center flex-column">
        <Radio name="radio"  id="radio1">Radio 1</Radio>
        <Radio name="radio"  id="radio2">Radio 2</Radio>
        <Radio name="radio"  id="radio3">Radio 3</Radio>
      </div>
    </Code>
  )
}

export const MultiRadioGroup = () => {
  const radioList = [...Array(10).keys()]
  return (
    <Code width="w-50" code={`<Radio name="radio">Radio 1</Radio>
      <Radio name="radio">Radio 2</Radio>
      <Radio name="radio">Radio 3</Radio>`}>
      <div className="d-flex justify-content-start flex-row flex-wrap">
        {radioList.map((i) => <Radio name="radio">Radio {i + 1}</Radio>)}
      </div>
    </Code>
  )
}