import { Link } from "react-router-dom";
import axios from "axios";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";

import imgRandomBeer from "../assets/random-beer.png";

export default function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState([]);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      });
  }, []);
  return (
    <div>
      <NavBar className="navBar" />
      <div>
        <h1>Random Beer</h1>
        {!randomBeer && <h3>Beer not found!</h3>}

        {randomBeer && (
          <>
            <img
              src={randomBeer.image_url}
              alt={randomBeer.name}
              className="detImg"
            />
            <h2>{randomBeer.name}</h2>
            <h4>{randomBeer.tagline}</h4>
            <span>{randomBeer.first_brewed}</span>
            <p>{randomBeer.attenuation_level}</p>
            <p>{randomBeer.description}</p>
            {/* <p>{randomBeer.contributed_by.split("<", 1)}</p> */}
          </>
        )}

        <Link to="/beers">Back</Link>
      </div>
    </div>
  );
}
