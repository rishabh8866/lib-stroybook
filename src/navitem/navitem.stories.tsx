import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Code from "../Code/Code";
import NavItem from "./navitem";

export default {
  title: "Navitem"
};

export const Size = () => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  const list = [
    {label: 'ID: test3456'},
    {label: 'Test, Test'},
    {label: 'test.test@cpa.texas.gov'},
    {label: '1234567890'},
    {label: 'IP: 172.17.9.101'},
    {label: 'My Account'},
    {label: 'User Profile, Password, and Security Questions', divider: true},
    {label: 'Logout'}
  ]
  useEffect(() => {
      document.addEventListener("click", handleClickOutside, false);
      return () => {
        document.removeEventListener("click", handleClickOutside, false);
      };
    }, []);
  
    const handleClickOutside = event => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column">

        <Code width="w-50" code={`<NavItem open={isOpen} list={list}/>`}>
          <NavItem open={isOpen} list={list} forwardRef={wrapperRef}>
          <div className="btn-group">
            <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={() => setIsOpen(!isOpen)}>
              Action
            </button>
          </div>
          </NavItem>
        </Code>
      </div>
    </div>
  )
}
