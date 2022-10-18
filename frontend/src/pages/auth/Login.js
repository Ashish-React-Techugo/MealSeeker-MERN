import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../../styles/Login.css'
import background from '../../images/background.png'
const userSchema = yup.object().shape({
    email: yup
      .string()
      .required("This field is required"),
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
      
      const onSubmit=handleSubmit((values) => {
        console.log("Hello",values)
      });

      
  return (
    <>
    <div className='main' style={{display:"grid",gridTemplateColumns:"50% 50%"}}>
    <form onSubmit={onSubmit}>
    <div className="container">
    <h1>Login Page</h1>
    <div className="form-group">
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
    <div className="form-group">
        <label>Password</label> <br/>
        <input type="password" name="password" placeholder="Enter Password..."
        {...register("password")}/>
         {errors.password ? (
                                  <div className="input-field-error">
                                    {errors.password.message}
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