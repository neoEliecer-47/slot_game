import { useState } from "react";
import { useGameContext } from "../context/GameContext";

import games from "../mocks/game-data.json";
import ButtonSlotGame from "./game/ButtonSlotGame";

const SearchGame = () => {

  const { setGamesSearched, gamesSearched } = useGameContext();

  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {//an asyncronus function for querys in real time
        const searchResult = games.filter((game) =>
          game.title.toLowerCase().includes(searchText.toLowerCase())
        );
        setGamesSearched(searchResult);
      }, 400)
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('nothing else')
  };

  return (
    <div className="flex justify-between mt-2 p-2 mx-2">
      <form className="gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          className="rounded-md p-2 hover:shadow-lg duration-300"
          placeholder="Search game"
          value={searchText}
          onChange={handleSearchChange}
        />
      </form>
      <ButtonSlotGame />
    </div>
  );
};

export default SearchGame;
