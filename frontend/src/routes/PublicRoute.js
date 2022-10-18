import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import Home from '../pages/Home/Home';


const PublicRoute = () => {
    const {auth}=useSelector(state=>state);
  return (
    !auth.login ? <Outlet/> : <Navigate to="/" />
  )
}

export default PublicRoute