import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Register.css'
import background from '../../images/background.png'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import user from '../../images/user.png'
import { signUp } from '../../api/auth';
const userSchema = yup.object().shape({
    userName: yup
    .string()
    .required("This field is required"),
    type: yup
    .string()
    .required("This field is required"),
    email: yup
      .string()
      .required("This field is required"),
      phone: yup
      .string()
      .required("This field is required"),
      address: yup
      .string()
      .required("This field is required"),
    password: yup.string().required("Password field is required")

  });
const Register = () => {
  const [userImage,setUserImage]=useState(user)
    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(userSchema),
      });
      // console.log(userImage)
      const onSubmit=handleSubmit((values) => {
        // console.log("Hello",values)
        let res = signUp({...values,userImage});
        console.log(res)
      });
  return (
    <div className='main' style={{display:"grid",gridTemplateColumns:"50% 50%"}}>
        <form onSubmit={onSubmit}>
    <div class="container">
    <h1>Register Page</h1>
    <div class="form-group">
        <label>Full Name</label> 
        <br/>
        <input type="text" name="name" placeholder="Enter Your Full Name...."
         {...register("userName")}/>
         {errors.userName ? (
                                  <div className="input-field-error">
                                    {errors.userName.message}
                                  </div>
                                ) : null}
    </div>
    <div class="form-group">
        <label>TYPE</label> 
        <br/>
        <input type="type" name="type" placeholder="USER OR ADMIN?...."
         {...register("type")}/>
         {errors.type ? (
                                  <div className="input-field-error">
                                    {errors.type.message}
                                  </div>
                                ) : null}
    </div>
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
        <label>Phone</label> 
        <br/>
        <input type="phone" name="phone" placeholder="Enter Mobile No....."
         {...register("phone")}/>
         {errors.phone ? (
                                  <div className="input-field-error">
                                    {errors.phone.message}
                                  </div>
                                ) : null}
    </div>
    <div class="form-group">
        <label>Address</label> 
        <br/>
        <input type="address" name="address" placeholder="Enter Your Address"
         {...register("address")}/>
         {errors.address ? (
                                  <div className="input-field-error">
                                    {errors.address.message}
                                  </div>
                                ) : null}
    </div>
    <div class="form-group">  
        <label>Password</label> <br/>
        <input type="password" name="password" placeholder="Enter Password..."
         {...register("password")}/>
         {errors.password ? (
                                  <div className="input-field-error">
                                    {errors.password.message}
                                  </div>
                                ) : null}
    </div>
    <div class="form-group">  
        <label htmlFor='user-image'><img src={userImage} style={{height:"300px",width:"300px",objectFit:"contain"}} /></label> <br/>
        <input style={{display:"none"}} onChange={(e)=>{
          var file = e.target.files[0];
          var reader = new FileReader();
          reader.onloadend = function() {
            setUserImage(reader.result)
          }
          reader.readAsDataURL(file)
        }} id="user-image" type="file" placeholder="Enter Password..."/>
    </div>
    <p>Already Have An Account?</p>
    <Link to="/login"> LogIn Now</Link> <br/>
    <button type="submit"> Sign Up</button>
    <br/>
    <a href="#">Forgot Password</a> <br/>
</div>
</form>
    <div className='image'>
    <img src={background }alt="image" />
    </div>
</div>
  )
}

export default Register