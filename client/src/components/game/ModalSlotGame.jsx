import { useState } from "react";
import SlotMachine from "../../miscellaneous/SlotMachine";
import Swal from "sweetalert2";
import useSlotGame from "../../hooks/useSlotGame";


const ModalSlotGame = () => {
  const [game, setGame] = useState(false);
  const [player, setPlayer] = useState("");

  const handlePlayerSubmit = async (e) => {
    e.preventDefault();
    if (!player) {
      Swal.fire({
        title: "Please, enter a player name",
        denyButtonColor: "green",
      });
      //setLoading(false)
      return;
    }
    try {
      const data = await useSlotGame("/slot", "POST", {//custom hook for fecth data. 
        player,
        gameType: "SLOT",
      });

      console.log(data);
      //data will be returning the name of the player already registered and its favorite game, in this case, Slot Game
    } catch (error) {
      console.log(error);
    }

    setGame(true);
  };

  return (
    <div className="absolute shadow-2xl shadow-gray-500 bg-opacity-90  duration-300 transform -translate-x-full transition-transform flex flex-col top-10 right-20 z-10 h-96 rounded-lg w-96  bg-blue-300 ">
      {!game && (
        <form onSubmit={handlePlayerSubmit} className="p-3 flex justify-center">
          <input
            type="text"
            placeholder="Enter player name"
            value={player}
            name="player"
            onChange={(e) => setPlayer(e.target.value)}
            className="rounded-md p-1"
            autoFocus
          />
        </form>
      )}

      {game && <SlotMachine player={player} />}
    </div>
  );
};

export default ModalSlotGame;
