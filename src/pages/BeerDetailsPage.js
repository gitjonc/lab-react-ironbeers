import { useParams, Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BeerDetailsPage(props) {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  const { beerId } = useParams();
  console.log(beerId);

  const foundBeer = beers.find((theBeer) => {
    return theBeer._id === beerId;
  });

  return (
    <div>
      <NavBar />
      <h1>Beer Details</h1>
      {!foundBeer && <h3>Beer not found!</h3>}

      {foundBeer && (
        <>
          <img
            src={foundBeer.image_url}
            alt={foundBeer.name}
            className="detImg"
          />
          <h2>{foundBeer.name}</h2>
          <h4>{foundBeer.tagline}</h4>
          <span>{foundBeer.first_brewed}</span>
          <p>{foundBeer.attenuation_level}</p>
          <p>{foundBeer.description}</p>
          {/* <p>{foundBeer.contributed_by.split("<", 1)}</p> */}
        </>
      )}

      <Link to="/beers">Back</Link>
    </div>
  );
}
