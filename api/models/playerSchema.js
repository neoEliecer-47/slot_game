import { Schema, model } from 'mongoose'

const playerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    favoriteGame: {
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }
})

const Player = model('player', playerSchema)
export default Player