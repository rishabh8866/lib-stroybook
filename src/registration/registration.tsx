import React from "react";

import { RegistrationProps } from "./registration.types";

import "./registration.scss";
import TextBox from "../textbox";

const Registration: React.FC<RegistrationProps> = React.forwardRef(({ loginLink, submit, register, errors, handleSubmit  }, ref: any) => {
    return (
        <div className="card">
          <div className="card-body">
        <form  onSubmit={handleSubmit(submit)} ref={ref}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <TextBox type="text" className={`form-control ${errors.firstName ? 'is-invalid' : ''}`} placeholder="First name" 
                        {...register("firstName", { required: true })}/>
                    <div className="invalid-feedback">
                    {errors.firstName?.message}
                    </div>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className={`form-control ${errors.lastName ? 'is-invalid' : ''}`} placeholder="Last name" 
                        {...register("lastName", { required: true })}/>
                    <div className="invalid-feedback">
                    {errors.lastName?.message}
                    </div>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className={`form-control ${errors.email ? 'is-invalid' : ''}`} placeholder="Enter email" 
                        {...register("email", { required: true })}/>
                    <div className="invalid-feedback">
                    {errors.email?.message}
                    </div>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className={`form-control ${errors.password ? 'is-invalid' : ''}`} placeholder="Enter password" 
                        {...register("password", { required: true })}/>
                    <div className="invalid-feedback">
                    {errors.password?.message}
                    </div>
                </div>
                <div className="form-group">
                <label>Confirm Password</label>
                <input
                    name="confirmPassword"
                    type="password"
                    {...register('confirmPassword')}
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''
                        }`}
                />
                <div className="invalid-feedback">
                    {errors.confirmPassword?.message}
                </div>
            </div>

                <button type="submit" className="btn btn-primary btn-block mt-2">Sign Up</button>
                {loginLink && <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>}
            </form>
            </div>
            </div>
    )
}
);

export default Registration;
