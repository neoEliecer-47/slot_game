import React from "react";
import { useGameContext } from "../../context/GameContext";

const ButtonSlotGame = () => {
  const { setModalSlot, modalSlot } = useGameContext();

  return (
    <button
      onClick={() => setModalSlot(!modalSlot)}
      className="bg-white p-2 hover:shadow-lg duration-300 hover:bg-orange-400 hover:text-white rounded-md"
    >
      Slot Game 🎰
    </button>
  );
};

export default ButtonSlotGame;
