import React from "react";
import { useState } from "react";

import { CodeProps } from "./Code.types";

import "./Code.scss";

const Code: React.FC<CodeProps> = ({ children, code, width }) => {
    const [show, setShow] = useState(false);
    const [tab, setTab] = useState('design');
    const copy = () => {
        navigator.clipboard.writeText(code).then(function() {
            console.log('Async: Copying to clipboard was successful!');
          }, function(err) {
            console.error('Async: Could not copy text: ', err);
          });
    }

    return (
        <div className="d-flex flex-column w-100 m-2"  data-testid={"code"}>
            <ul className="nav nav-tabs">
                <li className="nav-item" onClick={() => setTab('design')}>
                    <a className="nav-link">Design</a>
                </li>
                <li className="nav-item" onClick={() => setTab('code')}>
                    <a className="nav-link"  >Code</a>
                </li>
            </ul>
            <div>
                {tab === 'design' && <div className=" code-box w-100 pt-2"><div className="card card-body w-100"><div className={width}>{children}</div></div></div>}
                {tab === 'code' && <div className="d-flex pt-2">
              
            <div className="code-box w-100">
                <div className={`collapse collapse-horizontal show`}>
                    <div className="card card-body w-100 text-center fs-5 fw-bolder">
                        <pre>
                            <code>
                                {code}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>      
            <div className="d-flex">
                <div>
                    <p className="code-btn rounded" title="Click to copy the Code">
                        <div onClick={() => copy()}>
                            📋 
                        </div>
                    </p>
                </div>
            </div>
            </div>}
            </div>
        </div>
    )
}

export default Code;
