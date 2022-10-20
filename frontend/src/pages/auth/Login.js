import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import '../../styles/Login.css'
import background from '../../images/background.png'
import {useDispatch} from 'react-redux';
import { login } from '../../redux/actions/authAction';
const userSchema = yup.object().shape({
    loginfield: yup
      .string()
      .required("This field is required"),
    password: yup.string().required("Password field is required")

  });

const Login = () => {
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(userSchema),
      });
      
      const onSubmit=handleSubmit(async(values) => {
        console.log("Hello",values)
        let res =await dispatch(login(values))
        console.log(res)
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
        <input type="email" name="loginfield" placeholder="Enter Email...."
         {...register("loginfield")}/>
           {errors.loginfield ? (
                                  <div className="input-field-error">
                                    {errors.loginfield.message}
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