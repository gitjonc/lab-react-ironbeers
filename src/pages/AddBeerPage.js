import { useState } from "react";
import NavBar from "../components/NavBar";
import axios from "axios";

export default function AddBeerPage() {
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [first_brewed, setFirst_Brewed] = useState("");
  const [brewers_tips, setBrewers_Tips] = useState("");
  const [attenuation_level, setAttenuationLevel] = useState(0);
  const [contributed_by, setContributedBy] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: name,
      tagline: tagline,
      description: description,
      first_brewed: first_brewed,
      brewers_tips: brewers_tips,
      attenuation_level: attenuation_level,
      contributed_by: contributed_by,
    };
    console.log(body);
    axios
      .post("https://ih-beers-api2.herokuapp.com/beers/new", body)
      .then((res) => {
        setName("");
        setTagline("");
        setDescription("");
        setFirst_Brewed("");
        setBrewers_Tips("");
        setAttenuationLevel(0);
        setContributedBy("");
      });
  };

  return (
    <div className="AddBeerPage">
      <NavBar />
      <h3>Add new beer:</h3>
      <form onSubmit={handleSubmit} className="form">
        <label className="inputs">Name:</label>
        <input
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="inputs"
        />

        <label className="inputs">Tagline:</label>
        <input
          className="inputs"
          type="text"
          name="tagline"
          onChange={(e) => setTagline(e.target.value)}
          value={tagline}
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <label>First brewed:</label>
        <input
          type="text"
          name="firs_brewed"
          onChange={(e) => setFirst_Brewed(e.target.value)}
          value={first_brewed}
        />

        <label>Brewers Tips:</label>
        <input
          type="text"
          name="brewers_tips"
          onChange={(e) => setBrewers_Tips(e.target.value)}
          value={brewers_tips}
        />

        <label>Attenuation Level:</label>
        <input
          type="number"
          name="attenuation_Level"
          onChange={(e) => setAttenuationLevel(e.target.value)}
          value={attenuation_level}
        />

        <label>Contributed By:</label>
        <input
          type="text"
          name="contributed_by"
          onChange={(e) => setContributedBy(e.target.value)}
          value={contributed_by}
        />
        <button type="submit">Create Beer</button>
      </form>
    </div>
  );
}
