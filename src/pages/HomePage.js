import { Link } from "react-router-dom";
import beers from "../assets/beers.png";
import randomBeer from "../assets/new-beer.png";
import newBeer from "../assets/random-beer.png";

function HomePage() {
  return (
    <div className="main">
      <div>
        <Link to="/beers">
          <img src={beers} alt="beer" className="navBar" />
        </Link>
        <h2>All beers</h2>
        <p>
          Lorem fistrum labore velit papaar papaar llevame al sircoo velit. Sed
          te voy a borrar el cerito la caidita labore sit amet pecador.
          Reprehenderit torpedo pecador ex no te digo trigo por no llamarte
          Rodrigor jarl
        </p>
      </div>

      <div>
        <Link to="/random-beer">
          <img src={newBeer} alt="beer" className="navBar" />{" "}
        </Link>
        <h2>Random Beer</h2>
        <p>
          Lorem fistrum labore velit papaar papaar llevame al sircoo velit. Sed
          te voy a borrar el cerito la caidita labore sit amet pecador.
          Reprehenderit torpedo pecador ex no te digo trigo por no llamarte
          Rodrigor jarl
        </p>
      </div>

      <div>
        <Link to="/new">
          <img src={randomBeer} alt="beer" className="navBar" />{" "}
        </Link>
        <h2>New beer</h2>
        <p>
          Lorem fistrum labore velit papaar papaar llevame al sircoo velit. Sed
          te voy a borrar el cerito la caidita labore sit amet pecador.
          Reprehenderit torpedo pecador ex no te digo trigo por no llamarte
          Rodrigor jarl
        </p>
      </div>
    </div>
  );
}

export default HomePage;
