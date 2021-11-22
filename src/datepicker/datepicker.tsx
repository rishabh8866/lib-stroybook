import React, { useRef, useState } from "react";

import { DatePickerProps } from "./datepicker.types";

import "./datepicker.scss";
import ReactDatePicker  from "react-datepicker";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import Icon from "../icon";

const DatePick: React.FC<any> = (props) => {
  const _calendar = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    _calendar.current.setOpen(!isOpen);
  };
    return (
      <div className="date-picker"  data-testid={"datePicker"}><ReactDatePicker ref={_calendar}  {...props}/> <span onClick={handleClick}><Icon icon={faCalendar} /></span></div>
    );
}

export default DatePick;
