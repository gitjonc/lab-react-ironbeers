import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>You shouldn't be here</h1>
      <Link to="/beers">Go back </Link>
    </div>
  );
}
