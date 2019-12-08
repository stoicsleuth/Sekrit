import React from 'react'
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector(state => state.firebase)
  console.log(state)
  
  return (
    <div>
      <p>Logo</p>
    </div>
  )
}

export default Navbar