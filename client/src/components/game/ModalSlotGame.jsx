import { useState } from "react";
import SlotMachine from "../../miscellaneous/SlotMachine";
import Swal from "sweetalert2";
import useSlotGame from "../../hooks/useSlotGame";
import axios from 'axios'


const API_SLOT = "http://localhost:8080/api/v1/slot"


const ModalSlotGame = () => {
    const [game, setGame] = useState(false);
    const [player, setPlayer] = useState("");

    const handlePlayerSubmit = async (e) => {
        e.preventDefault();
        if(!player){
            Swal.fire({
                title: "Please, enter a player name",
                denyButtonColor: "green",
              })
              //setLoading(false)
              return;
        }
        try {
            //const { data } = useSlotGame("/slot", "POST", player);
           /* const { data } = await axios.get("http://127.0.0.0:8000/")
            console.log(data)
            */
            const data = await axios.post("http://localhost:8000/api/v1/slot", {
                player
            })
            console.log(data)

        //data will be returning the name of the player already registered and its favorite game, in this case, Slot Game
        console.log(data)
        } catch (error) {
            console.log(error)
        }
        
        setGame(true);
    };

    return (
        <div className="absolute shadow-2xl shadow-gray-500 bg-opacity-80  duration-300 transform -translate-x-full transition-transform flex flex-col top-10 right-20 z-10 h-72 rounded-lg w-52  bg-blue-300 ">
            {!game && (
                <form onSubmit={handlePlayerSubmit}>
                    <input
                        type="text"
                        placeholder="enter player name"
                        value={player}
                        name="player"
                        onChange={(e) => setPlayer(e.target.value)}
                    />
                </form>
            )}
            {game && <SlotMachine player={player} />}
        </div>
    );
};

export default ModalSlotGame;
