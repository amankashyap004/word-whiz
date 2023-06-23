import React from "react";

const Header = () => {
   return (
      <header className="bg-gray-900 text-white py-4">
         <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between">
               <h1 className="text-3xl font-bold cursor-pointer font-YsabeauOffice italic">
                  <span className="text-red-500">W</span>ord
                  <span className="text-red-500">W</span>hiz
               </h1>
               <ul className="flex items-center justify-center text-base">
                  <li className="px-2 cursor-pointer font-semibold uppercase hover:text-red-500">
                     Home
                  </li>
                  <li className="px-2 cursor-pointer font-semibold uppercase hover:text-red-500">
                     About
                  </li>
                  <li className="px-2 cursor-pointer font-semibold uppercase hover:text-red-500">
                     Setting
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
