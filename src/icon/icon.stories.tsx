import React from "react";
import Code from "../Code/Code";
import Icon from "./icon";
import { faCoffee, faAddressCard, faAnchor, faArrowLeft, faArrowRight, faCalendar, faSpinner, faUpload, faDownload, faSort } from '@fortawesome/free-solid-svg-icons';
import { IconName } from "@fortawesome/free-solid-svg-icons";

export default {
  title: "Icon"
};

export const Icons = () => {
  const icons: any = [{message: 'fa Coffee', icon: faCoffee, color: 'red', size: '2x'}, {message: 'fa Address Card', icon: faAddressCard}, {message: 'fa Anchor', icon: faAnchor},
  {message: 'fa Left Arrow', icon: faArrowLeft, color: 'red', size: '3x'}, {message: 'fa Right Arrow', icon: faArrowRight}, {message: 'fa Calendar', icon: faCalendar, color: 'red'},
  {message: 'fa Spinner', icon: faSpinner, color: 'blue', spin: true}, {message: 'fa Upload', icon: faUpload, color: 'blue'}, {message: 'fa Download', icon: faDownload, color: 'blue'},
  {message: 'fa Sort', icon: faSort},
]
  return (
    <Code width="w-100" code={`<Icon icon={IconList.faSpinner} spin/>`}>
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-row flex-wrap">
      
        {icons.map(i => {
          return (
            <div className="d-flex flex-column align-items-center p-2 m-2">
              <Icon {...i}/>
              <span>{i.message}</span>
            </div>
          )
        })}
        
      </div>
    </div>
    </Code>
  )
}
