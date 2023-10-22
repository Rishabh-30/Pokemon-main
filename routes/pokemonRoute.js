import express from "express";
import { deletePokemonController, getAllPokemonController, getOnePokemonController, pokemonController, updatePokemonController } from "../controllers/pokemonController.js";

const router = express.Router();

router.post("/pokemoncard", pokemonController);

router.get("/getAll",getAllPokemonController);

router.get("/getOne/:pkdx_id",getOnePokemonController);

router.delete("/delete/:pkdx_id",deletePokemonController);

router.put("/Update/:pkdx_id",updatePokemonController);

export default router;
