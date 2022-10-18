import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const {auth}=useSelector(state=>state);
    console.log(auth)
  return (
    <div>Home</div>
  )
}

export default Home