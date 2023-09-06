import express from "express";
import cors from "cors";
import "dotenv/config";
import "./database/connectDB.js";
import slotRoutes from "./routes/slotRoutes.js";

const app = express();

app.use(
  cors({
    origin: "https://slot-game.netlify.app",
    credentials: true,
  })
);

app.use(express.json());
app.disable("x-powered-by");
app.use("/api/v1/slot", slotRoutes);
console.log("");
app.listen(8000, () => console.log("Server running on http://localhost:8000"));
