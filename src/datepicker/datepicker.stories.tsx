import React, { useState } from "react";
import Code from "../Code/Code";
import DatePicker from "./datepicker";

export default {
  title: "DatePicker"
};

export const Datepicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
          <DatePicker   selected={startDate} onChange={(date) => setStartDate(date)}  maxDate={new Date()}/>
        </Code>

      </div>
    </div>
  )
}

export const DateRangepicker = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        <Code width="w-50" code={`<TextBox isInputGroup={true} icon="$" iconPlace="prefix" placeholder="Textbox with Icon"/>`}>
          <DatePicker  selected={startDate}
      selectsRange={true}
      startDate={startDate}
      endDate={endDate}
      onChange={(update) => {
        setDateRange(update);
      }}
      isClearable={true}
      />
        </Code>

      </div>
    </div>
  )
}