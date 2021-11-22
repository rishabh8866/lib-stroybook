import React from "react";
import Code from "../Code/Code";
import Select from "./select";

export default {
  title: "Select"
};

const options = [
  { value: 1, label: 'Select 1' },
  { value: 2, label: 'Select 2' },
  { value: 3, label: 'Select 3' },
]

export const Selects = () => {
  return (
    <div>
      <Code width="w-50" code={`<Select label="Country" options={options}>`}>
        <Select label="Country" options={options}>
        </Select>
      </Code>
    </div>
  )
}

export const SelectWithMulti = () => {
  return (
    <div>
      <Code width="w-50" code={`<Select label="Country" options={options}>`}>
        <Select label="Country" options={options} multi>
        </Select>
      </Code>
    </div>
  )
}

// export const SelectWithApi = () => {
//   const url = 'http://localhost:4200/countries'
//   const stateurl = 'http://localhost:4200/states'
//   const cityurl = 'http://localhost:4200/cities'
//   const key ='id';
//   const value = 'value';
//   const dataKey = '';
//   const countryApi = {url, key, value, dataKey};
//   const stateApi = {url: stateurl, key, value, dataKey};
//   const cityApi = {url: cityurl, key, value, dataKey};
//   return (
//     <div>
//       <Code width="w-50" code={`<Select label="Country" options={options}>`}>
//         <Select label="Country" api={countryApi}>
//         </Select>
//       </Code>
//       <Code width="w-50" code={`<Select label="Country" options={options}>`}>
//         <Select label="Country" api={stateApi}>
//         </Select>
//       </Code>
//       <Code width="w-50" code={`<Select label="Country" options={options}>`}>
//         <Select label="Country" api={cityApi}>
//         </Select>
//       </Code>
//     </div>
//   )
// }