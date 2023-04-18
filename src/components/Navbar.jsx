import React,{useState} from 'react'
import {HiMenu,HiX} from 'react-icons/hi'


const Navbar = () => {

  let Links = [
    {name:"Home", link: "/"},
    {name:"About", link: "/about"},
    {name:"Support", link: "/"},
    {name:"Platform", link: "/"},
    {name:"Pricing", link: "/"},
  
  ]

const [nav, setNav] = useState(false)
const handleClick = () => setNav(!nav)


  return (
    <div className="bg-zinc-300 w-screen h-[80px] z-10 fixed drop-shadow-md">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl ">APTOS.</h1>
          <ul className="hidden md:flex justify-between">
            {Links.map((link)=>(
              <li key={link.name}>
                <a href={`${link.link}`}>
                  {link.name}
                </a>
              </li>
            ))}
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
       {Links.map((link)=>(
        <li key={link.name}>
          <a href={`${link.link}`}>{link.name}</a>
        </li>
       ))}
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