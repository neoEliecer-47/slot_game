import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import './database/connectDB.js'

import slotRoutes from './routes/slotRoutes.js'

const app = express();

//app.use(cors())


app.use(cors({
    
    origin: 'http://localhost:5173/',
    credentials: true
  }));
  //app.options('*', cors());

app.use(express.json());
app.disable("x-powered-by")
app.use("/api/v1/slot", slotRoutes)

app.get("/", (req, res) => {
   
    
    res.status(200).json('hi from node js')
})

app.listen(8000, () => console.log('Server running on http://localhost:8000'))