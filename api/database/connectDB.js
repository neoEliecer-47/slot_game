import { connect } from 'mongoose'

connect(process.env.MONGO_DB)
    .then(() => console.log('Database connected 👍'))
    .catch((e) => console.log('something went wrong: '+e))