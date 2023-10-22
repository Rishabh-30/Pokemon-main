import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function PokemonDetail() {
      const [resp, setResp] = useState();
      const params = useParams();

      useEffect(() => {
        getOneDataFromMongoDB();
      }, []);

      const getOneDataFromMongoDB = async () => {
        try {
          const resp = await axios.get(
            `http://localhost:8080/api/v1/getOne/${params.pkdx_id}}`
          );
          setResp(resp);
          console.log(resp);
        } catch (error) {
          console.log(error);
        }
      };
      return (
        <>
          <div className="card-container">
            <div className="card">
              <div class="card__img">
                <img src="http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png" />
              </div>
              <div class="card__descr-wrapper">
                <p class="card__title">Bulbasaur</p>
                <p class="card__descr">
                  Bulbasaur can be seen napping in bright sunlight. There is a
                  seed on its back. By soaking up the sun's rays, the seed grows
                  progressively larger. Bulbasaur can be seen napping in bright
                  sunlight. There is a seed on its back. By soaking up the sun's
                  rays, the seed grows progressively larger
                </p>
                <div class="card__links">
                  <button type="button" className="btn btn-info">
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      );
}

export default PokemonDetail