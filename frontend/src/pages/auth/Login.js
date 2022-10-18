import React from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useForm } from "react-hook-form";
import {Link} from 'react-router-dom'
import '../../styles/Login.css'
import background from '../../images/background.png'
const userSchema = yup.object().shape({
    email: yup
      .string()
      .required("Email field is required")
      .matches(
        /^([_a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,5}))|(\d+$)$/,
        "Email/Mobile  no. is not valid"
      ),
  
    password: yup.string().required("Password field is required")

  });

const Login = () => {
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(userSchema),
      });
  return (
    <>
    <div className='main'>
    <form>
    <div class="container">
    <h1>Login Page</h1>
    <div class="form-group">
        <label>Email</label> 
        <br/>
        <input type="email" name="email" placeholder="Enter Email...."
         {...register("email")}/>
           {errors.email ? (
                                  <div className="input-field-error">
                                    {errors.email.message}
                                  </div>
                                ) : null}
    </div>
    <div class="form-group">
        <label>Password</label> <br/>
        <input type="password" name="password" placeholder="Enter Password..."
        {...register("password")}/>
         {errors.email ? (
                                  <div className="input-field-error">
                                    {errors.email.message}
                                  </div>
                                ) : null}
    </div>
    <p>Not Connected With US?</p>
    <Link to="/register"> Register Now</Link> <br/>
    
    <button type="submit">Log In</button>
    <br/>
    <Link to="/">Forgot Password</Link> <br/>
</div>
</form>
    <div className='image'>
    <img src={background }alt="image" />
    </div>
</div>
</>
  )
}

export default Login