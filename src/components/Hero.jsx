import React from 'react'

import bgImg from '../assets/crypt_bg.jpg'

import { HiDatabase, HiOutlineCurrencyDollar, HiPaperAirplane, HiServer } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="w-full h-screen bg-zinc-300 flex flex-col justify-between ">
      <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-2">
          <p className="text-5xl md:text-7xl py-2 font-semibold pr-8">
            Fastest & most Secure platform to invest in Crypto
          </p>
          <p className="text-xl md:text-lg py-2 my-1 pr-8">
            Trust our team to get you the smart tools for smart investing. Buy
            and sell selected cryptocurrencies, trusted by 5M wallets with over
            $25 billion in transactions
          </p>
          <button className="py-3 px-3 sm:w-[45%] my-4">Try for FREE</button>
        </div>
        <div className="w-full ">
          <img src={bgImg} alt="background" />
        </div>
        <div className="absolute flex flex-col py-10 md:min-w-[760px] bottom-[-5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl ">
          <p className="text-3xl font-semibold">Data Services </p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2">
              <HiDatabase className="w-6 h-6" /> Database Services
            </p>
            <p className="flex px-4 py-2">
              <HiPaperAirplane className="w-6 h-6" />
              API Services
            </p>
            <p className="flex px-4 py-2">
              <HiServer className="w-6 h-6" />
              E-Investment
            </p>
            <p className="flex px-4 py-2">
              <HiOutlineCurrencyDollar className="w-6 h-6" />
              Crypto Trading
            </p>
          </div>
        </div>
      </div>
    </div>
  ); 
}

export default Hero 