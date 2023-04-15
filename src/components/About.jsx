import React from 'react'

const About = () => {
  return (
    <div className="w-full my-32 max-w-[1240px] mx-auto">
      <div className="text-center ">
        <h1 className="text-5xl font-bold">Why you should choose APTOS?</h1>
        <p className="text-3xl py-6 text-gray-500">lorem ipsum dolor sit amet, consectetur adip lorem</p>
      </div>
      <div className=" grid md:grid-cols-3 gap-1 px-2 text-center">
        <div className=" border py-8 rounded-xl shadow-xl">
          <p className="text-6xl text-green-600 font-bold">100%</p>
          <p className="text-gray-400 mt-2 text-xl">Completion</p>
        </div>
        <div className=" border py-8 rounded-xl shadow-xl">
          <p className="text-6xl text-green-600 font-bold">24/7</p>
          <p className="text-gray-400 mt-2 text-xl">Support Services</p>
        </div>
        <div className=" border py-8 rounded-xl shadow-xl">
          <p className="text-6xl text-green-600 font-bold">100K</p>
          <p className="text-gray-400 mt-2 text-xl">Transactions</p>
        </div>
      </div>
    </div>
  );
}

export default About