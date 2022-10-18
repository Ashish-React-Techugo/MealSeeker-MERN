import React from 'react'
import {Link} from 'react-router-dom'
import '../../styles/Register.css'
import background from '../../images/background.png'

const Register = () => {
  return (
    <div className='main'>
    <div class="container">
    <h1>Register Page</h1>
    <div class="form-group">
        <label>Full Name</label> 
        <br/>
        <input type="FullName" name="name" placeholder="Enter Your Full Name...."/>
    </div>
    <div class="form-group">
        <label>TYPE</label> 
        <br/>
        <input type="type" name="type" placeholder="USER OR ADMIN?...."/>
    </div>
    <div class="form-group">
        <label>Email</label> 
        <br/>
        <input type="email" name="email" placeholder="Enter Email...."/>
    </div>
    <div class="form-group">
        <label>Phone</label> 
        <br/>
        <input type="phone" name="phone" placeholder="Enter Mobile No....."/>
    </div>
    <div class="form-group">
        <label>Address</label> 
        <br/>
        <input type="address" name="address" placeholder="Enter Your Address"/>
    </div>
    <div class="form-group">
        <label>Password</label> <br/>
        <input type="password" name="password" placeholder="Enter Password..."/>
    </div>
    <p>Already Have An Account?</p>
    <Link to="/login"> LogIn Now</Link> <br/>
    <button type="submit"> Sign Up</button>
    <br/>
    <a href="#">Forgot Password</a> <br/>
</div>
    <div className='image'>
    <img src={background }alt="image" />
    </div>
</div>
  )
}

export default Register