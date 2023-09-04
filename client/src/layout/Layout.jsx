import React, { useEffect } from "react";
import CardGame from "../components/CardGame";

import SearchGame from "../components/SearchGame";
import HeaderGame from "../components/HeaderGame";

import games from "../mocks/game-data.json";
import { useGameContext } from "../context/GameContext";
import ModalSlotGame from "../components/game/ModalSlotGame";

const Layout = () => {
   
  const { gamesSearched, setGamesSearched, modalSlot } = useGameContext()

  

    useEffect(() => {
      if(!gamesSearched) setGamesSearched(games)
    }, [gamesSearched])


    if(!gamesSearched) return <div>loading...</div>
  
  
  return (
        <>
            <header>
              <HeaderGame />
            </header>
            <main className="relative max-w-[80%] mx-auto bg-gray-300">
                <SearchGame />
                <CardGame games={gamesSearched} />
                {modalSlot && (
                  <ModalSlotGame />
                )}
            </main>
        </>
    );
};

export default Layout;
