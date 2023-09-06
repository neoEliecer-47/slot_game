import React, { useState } from "react";
import Swal from "sweetalert2";

import axios from "axios";
import { useGameContext } from "../context/GameContext";

const SlotMachine = ({ player }) => {
  const [coins, setCoins] = useState(20);
  const [fruits, setFruits] = useState(["apple", "banana", "cherry"]);
  const { setModalSlot, modalSlot } = useGameContext();

  const handlePlaySlotMachine = async () => {
    const { data } = await axios.get("http://localhost:8000/api/v1/slot");
    

    setFruits(data.results);
    if (data.coins > 0) {//validation for only get messages when you win coins
      Swal.fire({
        title: "You win " + data.coins + " coins",
        denyButtonColor: "green",
      });
      setCoins(coins + data.coins);
      return;
    }
    setCoins(coins - 1);
    if (coins === 0) {
      Swal.fire({
        title: "Game over",
        denyButtonColor: "red",
      });
      setModalSlot(!modalSlot);
    }
  };

  return (
    <div className="p-4">
      <div>
        <h3 className="text-xl font-italic">
          Player: <strong className="text-green-700">{player}</strong>
        </h3>
        <strong>coins: {coins}🪙</strong>

        <div className="flex items-center justify-center gap-2 bg-gray-100 rounded-md my-4 p-4">
          {fruits &&
            fruits?.map((fruta, index) => (
              <h1
                key={index}
                className="text-center font-semibold text-2xl text-gray-700"
              >
                {fruta} |
              </h1>
            ))}
        </div>
      </div>
      <section className="flex justify-center items-center">
        <button
          className="p-6 w-18 justify-center items-center flex mt-16 bg-white rounded-full hover:shadow-xl hover:bg-red-400 hover:text-white text-semibold duration-300"
          onClick={handlePlaySlotMachine}
        >
          Play
        </button>
      </section>
    </div>
  );
};

export default SlotMachine;
