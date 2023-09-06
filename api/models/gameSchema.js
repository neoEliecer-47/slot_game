import { Schema, model } from "mongoose";
//schema for database
const gameSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gameType: {
    type: String,
  },
  countriesAllowedToBet: {
    type: [String],
  },
});

const Game = model("Game", gameSchema);
export default Game;
