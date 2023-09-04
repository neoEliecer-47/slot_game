import { useState } from "react";
import { useGameContext } from "../context/GameContext";

import games from "../mocks/game-data.json";
import ButtonSlotGame from "./game/ButtonSlotGame";

const SearchGame = () => {
    const [text, setText] = useState("");
    const { setGamesSearched, gamesSearched } = useGameContext();

    const [searchTimeout, setSearchTimeout] = useState(null);
    const [searchText, setSearchText] = useState("");

    

    const handleSearchChange = (e) => {
        clearTimeout(searchTimeout);
        setSearchText(e.target.value);

        setSearchTimeout(
            setTimeout(() => {
                const searchResult = games.filter((game) =>
                    game.title.toLowerCase().includes(searchText.toLowerCase())
                );
                setGamesSearched(searchResult);
            }, 400)
        );
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submit!!");
    };

    return (
        <>
            <form
                className="flex justify-between gap-2"
                onSubmit={handleSubmit}
            >
                <input
                    type="text"
                    name="text"
                    placeholder="search a game"
                    value={searchText}
                    onChange={handleSearchChange}
                />
            </form>
            <ButtonSlotGame />
        </>
    );
};

export default SearchGame;
