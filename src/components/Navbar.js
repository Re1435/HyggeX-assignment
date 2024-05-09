import React from 'react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className="flex mx-5 justify-between items-center m-5">
      <img src={Logo} alt="logo" className="mr-10 mb-5" />
      <div className="flex justify-around gap-6 text-xl">
        <h3>Home</h3>
        <h3>Flashcard</h3>
        <h3>Contact</h3>
        <h3>FAQ</h3>
        <div className="h-9 w-[90px] text-center border-2 rounded-2xl bg-blue-800 mb-10">
          <button className="text-white">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
