import Game from "../models/gameSchema.js";
import Player from "../models/playerSchema.js";

export const slotMachine = (req, res) => {
  //i am gonna take an object of every array and set them into a new array objects and send that array to the front as json
  const reels = [
    ["cherry", "lemon", "apple", "lemon", "banana", "banana", "lemon", "lemon"],
    ["lemon", "apple", "lemon", "lemon", "cherry", "apple", "banana", "lemon"],
    ["lemon", "apple", "lemon", "apple", "cherry", "lemon", "banana", "lemon"],
  ];

  const coinCombos = [
    ["cherry", "cherry", "cherry", 50],
    ["cherry", "cherry", 40],
    ["apple", "apple", "apple", 20],
    ["apple", "apple", 10],
    ["banana", "banana", "banana", 15],
    ["banana", "banana", 5],
    ["lemon", "lemon", "lemon", 3],
  ];

  var results = [];

  for (let i = 0; i <= 2; i++) {
    let range = Math.floor(Math.random() * reels[i]?.length);

    let value = reels[i][range];
    results.push(value);
  }

  const winnerCoins = (results) => {
    for (const combo of coinCombos) {
      //looping win combos and compare them with results (combitation of fruits)
      const [a, b, c, d] = combo;

      if (results[0] === a && results[1] === b) {
        if (
          results[0] === "lemon" &&
          results[1] === "lemon" &&
          results[2] !== "lemon"
        )
          return;
        if (results[2] === c) return d;
        if (results[0] === results[1] && results[2] !== results[1]) {
          //returning coins won
          if (c === "banana") return 5;
          if (c === "apple") return 10;
          if (c === "cherry") return 40;
        }
      }

      //return 0
    }
  };

  const coins = winnerCoins(results);
  if (coins) {
    res.status(200).json({ results, coins: coins });
  } else {
    res.status(200).json({ results, coins: 0 });
  }
};

export const playerAndSlotGame = async (req, res) => {
  //res.header("Access-Control-Allow-Origin", "http://localhost:5173")
  try {
    const { player, gameType } = req.body;

    let playerDoc = await Player.findOne({ player });
    if (playerDoc) return res.status(400).json("player already exists"); //bad request

    const { _id } = await Game.findOne({ gameType }); //finding game which includes type 'SLOT'

    playerDoc = new Player({ playerName: player, favoriteGame: _id });
    await playerDoc.save();
    console.log(playerDoc);

    res.status(201).json(playerDoc); //document created
  } catch (error) {
    res.status(500).json("something went wrong with the server"); //server error
  }
};

export const playersAndTheirFavoriteGame = async (req, res) => {
  try {
    const players = await Player.find().populate(
      //query for get all players with their favorite game. this case 'SLOT'
      "favoriteGame",
      "name gameType countriesAllowedToBet -_id"
    );
    res.json(players);
  } catch (error) {
    res.status(404).json("there are not players with favorite games yet"); // not found
  }
};
