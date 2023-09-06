import React from "react";
import kanon from "../assets/kanon-gaming.jpg";

const HeaderGame = () => {
  return (
    <div className="flex gap-2 justify-center items-center rounded-md bg-gray-200 w-26">
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-5">
        Kanon Gaming
      </h1>
      <img src={kanon} alt="" className="w-12 h-12 object-cover" />
    </div>
  );
};

export default HeaderGame;
