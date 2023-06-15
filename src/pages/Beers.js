import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";

export default function BeersPage() {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      setBeers(response.data);
    });
  }, []);

  return (
    <div>
      <NavBar />
      {beers.map((beer) => (
        <div key={beer._id} className="card">
          <Link to={`/beers/${beer._id}`} className="card2">
            <img src={beer.image_url} alt="beer" className="listBeers" />
            <div className="description">
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              {/* <p>Created by: {beer.contributed_by.split("<", 1)}</p> */}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
