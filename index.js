import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import pokemonRoutes from "./routes/pokemonRoute.js";

//configure env
dotenv.config();

//databse config
connectDB();

const app = express();

//middelwares
app.use(cors());
app.use(express.json());

//routes
console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
app.use("/api/v1", pokemonRoutes);

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
