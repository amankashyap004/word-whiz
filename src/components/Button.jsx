import React from "react";

const Button = ({ value }) => {
   return (
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
         {value}
      </button>
   );
};

export default Button;
