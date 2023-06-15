import "./App.css";
import BeersPage from "./pages/Beers";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import RandomBeer from "./pages/RandomBeer";
import NewBeer from "./pages/NewBeer";
import BeerDetailsPage from "./pages/BeerDetailsPage";
import ErrorPage from "./pages/ErrorPage";
import AddBeerPage from "./pages/AddBeerPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<BeersPage />} />
        <Route path="/random-beer" element={<RandomBeer />} />
        {/* <Route path="/new-beer" element={<NewBeer />} /> */}
        <Route path="/beers/:beerId" element={<BeerDetailsPage />} />
        <Route path="/new" element={<AddBeerPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
export default App;
