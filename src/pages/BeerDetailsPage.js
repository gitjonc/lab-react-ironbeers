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

  const foundBeer = beers.find((theBeer) => {
    return theBeer._id === beerId;
  });

  return (
    <div className="detail">
      <NavBar />
      {!foundBeer && <h3>Still haven't found that beer...</h3>}

      {foundBeer && (
        <div>
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
          {foundBeer.contributed_by ? (
            <p>Created by: {foundBeer.contributed_by.split("<", 1)}</p>
          ) : (
            ""
          )}
        </div>
      )}

      <Link to="/beers">Back</Link>
    </div>
  );
}
