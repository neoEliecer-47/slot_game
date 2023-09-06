import { Schema, model } from "mongoose";
//schema for database
const playerSchema = new Schema({
  playerName: {
    type: String,
    required: true,
    trim: true,
  },
  favoriteGame: {
    type: Schema.Types.ObjectId,
    ref: "Game",
  },
});

const Player = model("player", playerSchema);
export default Player;
