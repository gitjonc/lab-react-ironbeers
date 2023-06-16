import { Link } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function NavBar() {
  return (
    <div className="navBar2">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Home-icon.svg/1200px-Home-icon.svg.png"
          alt="home"
          className="navBarImg blue"
        ></img>
      </Link>
    </div>
  );
}
