import React, { useState, useEffect } from "react";
import "./Hero.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  const params = useParams();
  const [pkdx_id, setPkdx_id] = useState(1);
  const [result, setResult] = useState();
  const [name, setName] = useState("");
  const [image_url, setImage_url] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllDataFromMongoDB();
  }, []);

  const getAllDataFromMongoDB = async () => {
    try {
      const result = await axios.get("http://localhost:8080/api/v1/getAll");
      setResult(result);
      setLoading(false);
      console.log(result.data.getAllpokemon);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // getOneDataFromMongoDB();
  }, []);

  const getOneDataFromMongoDB = async () => {
    try {
      const res = await axios.get(
        `http://localhost:8080/api/v1/getOne/${params.pkdx_id}}`
      );
      setPkdx_id();
      setName();
      setImage_url();
      setDescription();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // deleteOneDataFromMongoDB();
  }, []);

  const deleteOneDataFromMongoDB = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:8080/api/v1/delete/${params.pkdx_id}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // updateOneDataFromMongoDB();
  });

  const updateOneDataFromMongoDB = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8080/api/v1/Update/${params.pkdx_id}`
      );
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="Hero-Container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="card-container">
            {result.data.getAllpokemon.map((item) => (
              <div className="card">
                <div class="card__img">
                  <img src={item.image_url} alt="" />
                </div>
                <div class="card__descr-wrapper">
                  <p class="card__title">{item.name}</p>
                  <p class="card__descr">
                    {item.description.substring(0, 120)}...
                  </p>
                  <div class="card__links">
                    <button
                      type="button"
                      className="btn btn-info"
                      onClick={() => navigate(`/getOne/${item.pkdx_id}`)}
                    >
                      Read more
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hero;
