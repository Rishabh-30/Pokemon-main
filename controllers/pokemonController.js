import pokemonModel from "../models/pokemonModel.js";
import pkg from "react-router-dom";

const { params } = pkg;

export const pokemonController = async (req, res) => {
  const a=req.body;
  try {
    for (let i = 0; i < a.length; i++) {
      const post = new pokemonModel({
        pkdx_id: a[i]["pkdx_id"],
        name: a[i]["name"],
        image_url: a[i]["image_url"],
        description: a[i]["description"],
      });
      post.save(); 
    }
    res.status(201).send({
      success: true,
      message: "Data Add Successfully in MongoDB ",
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Adding Data in MongoDB",
      error,
    });
  }
};


//get All Products
export const getAllPokemonController=async (req, res) => {
  try {
    const getAllpokemon=await pokemonModel.find().limit(24);
    console.log(`getAllpokemon : ${getAllpokemon}`);
    res.status(200).send({
      success: true,
      message: "AllPokemon",
      getAllpokemon,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Getting data",
      error,
    });
  }
};

//get Single pokemon
export const getOnePokemonController = async (req, res) => {
  try {
   
    const getOnepokemon = await pokemonModel.findOne({pkdx_id:req.params.pkdx_id});
    console.log(`getOnepokemon : ${getOnepokemon}`);
    res.status(200).send({
      success: true,
      message: "Single pokemon Fetched",
      getOnepokemon,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror while getitng single pokemon",
      error,
    });
  }
};


//delete Controller
export const deletePokemonController = async (req, res) => {
  try {

    const deletepokemon = await pokemonModel.findByIdAndDelete(req.params._id);
    console.log(deletepokemon);
    res.status(200).send({
      success: true,
      message: "pokemon Deleted successfully",
    });
  } catch (error) {
    console.log(error);
     res.status(500).send({
       success: false,
       message: "Error while deleting pokemon",
       error,
     });
  }
}


//update pokemon
export const updatePokemonController = async(req,res)=>{
  try {
    const uppokemon = await pokemonModel
      .findByIdAndUpdate(req.params._id, { ...req.body })
      .save();
     res.status(201).send({
       success: true,
       message: "pokemon Updated Successfully",
       uppokemon,
     });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error in Updte pokemon",
    });
  }
}