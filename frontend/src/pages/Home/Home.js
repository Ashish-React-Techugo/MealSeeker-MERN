import React from 'react'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import Login from '../../pages/auth/Login'
// import Register from '../../pages/auth/Register'
const Home = () => {
    const {auth}=useSelector(state=>state);
    console.log(auth)
  return (
    <div>
      home
    </div>
  )
}

export default Home