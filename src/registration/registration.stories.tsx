import React from "react";
import Registration from "./registration";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { RegistrationValidationSchema } from './index';
import Code from "../Code/Code";


export default {
  title: "Registration"
};

export const RegistrationForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm({
    resolver: yupResolver(RegistrationValidationSchema)
  });
  const submit = () => handleSubmit(console.log);

  return (
    <Code width="w-100" code={`<div className="col-lg-4 offset-lg-4"> 
      <Registration register={register}  errors={errors} handleSubmit={submit} />
    </div>`}>

      <div className="col-lg-4 offset-lg-4">
        <Registration register={register} errors={errors} handleSubmit={submit} />
      </div>
    </Code>
  )
}