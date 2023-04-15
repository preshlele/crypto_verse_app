import React from "react";
// import FooterItemsContainer from "./FooterItemsContainer";
// import "@fontsource/poppins";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-presh py-7 ">
        <h1 className="lg:text-2xl text-xl md:mb-0 mb-6 lg:leading normal font-semibold md:w-2/5">
          <span className="text-green-500">Join</span> the cryptoverse  for endless opportunities
        </h1>
        <div>
          <input
            type="text"
            placeholder="Enter your email address"
            className="text-gray-800 sm:w-72 w-full sm:mr-5 mr-1 pl-3 lg:mb-0 mb-4 py-2.5 rounded focus:outline-none"
          />
          <button className="px-8 py-3 rounded-md text-white   sm:w-[258px] md:w-auto w-full">
            Mail Us
          </button>
        </div>
      </div>

      <ul className="bg-gray-900 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-10">
        <li>
          <h1 className="mb-3 font-semibold">MOVIES</h1>
          <h3 className="text-sm text-gray-400">Lopsem irem</h3>
          <h3 className="text-sm text-gray-400">Lopsem irem</h3>
        </li>
        <li>
          <h1 className="mb-3 font-semibold">TV PROGRAMMES</h1>
          <h3 className="text-sm text-gray-400">Lopsem irem</h3>
          <h3 className="text-sm text-gray-400">Lopsem irem</h3>
        </li>
        <li>
          <h1 className="mb-3 font-semibold">PEOPLE</h1>
          <h3 className="text-sm text-gray-400">Lopsem irem</h3>
          <h3 className="text-sm text-gray-400">Lopsem irem</h3>
        </li>
        <li>
          <h1 className="mb-3 font-semibold">LEGAL</h1>
          <h3 className="text-sm text-gray-400">Lopsem irem</h3>
          <h3 className="text-sm text-gray-400">Lopsem irem</h3>
        </li>
      </ul>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8 mt-3 lg:ml-20">
        <span>2022. Preshlele . All rights reserved.</span>
        <span>Terms & Privacy Policy</span>
      </div>
    </footer>
  );
};

export default Footer;
