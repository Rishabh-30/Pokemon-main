import mongoose from "mongoose";

const pokemonModel = new mongoose.Schema({
  pkdx_id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: true,
  },
  image_url: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

export default mongoose.model("pokemon", pokemonModel);
