import { Schema, model } from 'mongoose'

const gameSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    gameType: {
        type: String
    },
    countriesAllowed: {
        type: [String]
    },

})

const Game = model('Game', gameSchema)
export default Game