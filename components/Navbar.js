import React from "react";
export const Navbar = () => {
  return (
    <div className="flex flex-row items-center  justify-between px-20 py-10">
      <div className="flex flex-row items-center">
        <h1 className="font-bold italic text-2xl text-white mr-10">Payments</h1>
        <ul className="flex flex-row space-x-10">
          <li>
            <a
              href="#"
              className="text-gray-400 text-sm tracking-wide font-light"
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 text-sm tracking-wide font-light"
            >
              Product
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 text-sm tracking-wide font-light"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-gray-400 text-sm tracking-wide font-light"
            >
              Sales
            </a>
          </li>
        </ul>
      </div>
      <div className="flex flex-row space-x-10 items-center">
        <a href="#" className="text-gray-400 text-sm tracking-wide font-light">
          Sales
        </a>
        <button className="bg-[#272A30] text-gray-300 px-8 text-sm py-2 rounded-md shadow-xl drop-shadow-2xl">
          Sign in
        </button>
      </div>
    </div>
  );
};
