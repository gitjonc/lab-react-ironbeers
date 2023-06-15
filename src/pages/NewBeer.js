import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";

import imgNewBeer from "../assets/new-beer.png";

export default function NewBeer() {
  return (
    <div>
      <NavBar />
      <img src={imgNewBeer} alt="new-beer" className="navBar" />
      <p>
        Lorem fistrum labore velit papaar papaar llevame al sircoo velit. Sed te
        voy a borrar el cerito la caidita labore sit amet pecador. Reprehenderit
        torpedo pecador ex no te digo trigo por no llamarte Rodrigor jarl
      </p>
      <Link to="/new-beer">New Beer</Link>
    </div>
  );
}
