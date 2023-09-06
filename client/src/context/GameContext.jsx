import { createContext, useContext, useState } from "react";

const gameContext = createContext();

const GameProvider = ({ children }) => {//Context api, hook for gobal variables for manage global states
  const [gamesSearched, setGamesSearched] = useState(null);
  const [modalSlot, setModalSlot] = useState(false);

  return (
    <gameContext.Provider
      value={{ gamesSearched, setGamesSearched, modalSlot, setModalSlot }}
    >
      {children}
    </gameContext.Provider>
  );
};

export default GameProvider;
export const useGameContext = () => useContext(gameContext);
