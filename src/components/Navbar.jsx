import React,{useState} from 'react'
import {HiMenu,HiX} from 'react-icons/hi'


const Navbar = () => {

const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)


  return (
    <div className="bg-zinc-300 w-screen h-[80px] z-10 fixed drop-shadow-md">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl ">APTOS.</h1>
          <ul className="hidden md:flex justify-between">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platform</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4">
          <button className="border-none bg-transparent text-black mr-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
        <div className=" md:hidden mr-4 text-2xl" onClick={handleClick}>
          {!nav ? <HiMenu className="w-5" /> : <HiX className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? "hidden" : "absolute bg-zinc-300 w-full px-8"}>
        <li className="border-b-2 border-zinc-400 w-full">Home</li>
        <li className="border-b-2 border-zinc-400 w-full">About</li>
        <li className="border-b-2 border-zinc-400 w-full">Support</li>
        <li className="border-b-2 border-zinc-400 w-full">Platform</li>
        <li className="border-b-2 border-zinc-400 w-full">Pricing</li>
        <div className="flex flex-col my-4">
          <button className="bg-transparent text-green-500 px-8 py-3 mb-4">
            Sign In
          </button>
          <button className="px-8 py-3">Sign Up</button>
        </div>
      </ul>
    </div>
  );
}

export default Navbar