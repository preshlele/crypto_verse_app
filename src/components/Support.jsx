import React from 'react'
import {
  HiPhone,
  HiOutlineSupport,
  HiOutlineArrowSmRight,
  HiLightBulb,
} from "react-icons/hi";
import supportImg from "../assets/customer_service.jpg";

const Support = () => {
  return (
    <>
      <div className="w-full mt-24">
        <div className="w-full h-[700px] bg-gray-900/90 absolute">
          <img
            className="object-cover w-full h-full mix-blend-overlay"
            src={supportImg}
            alt="representing support"
          />
        </div>

        <div className="text-white relative max-w-[1240px] mx-auto">
          <div className="px-4 py-8">
            <h2 className="pt-4 text-slate-300 uppercase text-center text-3xl">
              SUPPORT
            </h2>
            <h1 className="text-5xl font-bold py-4 text-center">
              We provide 24/7 Support Services
            </h1>
            <p className="py-4 text-3xl text-slate-300 mx-auto px-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              perspiciatis iste sit, tempore dolores quasi corporis voluptatibus
              nostrum odit reiciendis? Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Quia maxime perferendis labore explicabo, nulla
              nesciunt.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <HiPhone className="w-14 h-12 bg-green-600 text-white p-2 rounded-lg mt-[-3.5rem]" />
              <h3 className="font-bold text-2xl my-3">Sales</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                quidem assumenda.
              </p>
            </div>

            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-green-600 font-medium">
                Contact Us <HiOutlineArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <HiOutlineSupport className="w-14 h-12 bg-green-600 text-white p-2 rounded-lg mt-[-3.5rem]" />
              <h3 className="font-bold text-2xl my-3">Technical Support</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                quidem assumenda.
              </p>
            </div>

            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-green-600 font-medium">
                Contact Us <HiOutlineArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-2xl">
            <div className="p-8">
              <HiLightBulb className="w-14 h-12 bg-green-600 text-white p-2 rounded-lg mt-[-3.5rem]" />
              <h3 className="font-bold text-2xl my-3">Learn More</h3>
              <p className="text-gray-600 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                quidem assumenda.
              </p>
            </div>

            <div className="bg-slate-100 pl-8 py-4">
              <p className="flex items-center text-green-600 font-medium">
                Contact Us <HiOutlineArrowSmRight className="w-5 ml-2" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Support