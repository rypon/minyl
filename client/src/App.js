import "./App.css";
import react, { useState, useEffect } from "react";
import LanderPage from "./components/LanderPage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import StarterPage from "./components/StarterPage";
import About from "./components/About";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
function App() {
  const DeezerPublicApi = require("deezer-public-api");
  let deezer = new DeezerPublicApi();

  const [artist, setArtist] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  console.log(currentUser);

  //Search an artist
  useEffect(() => {
    deezer.search.artist("ILYSH").then(function (result) {
      setArtist(result);
    });
  }, []);

  const artistSearch = artist.data;
  console.log(artistSearch);
  //get artist image url
  const artistPicture = artistSearch?.map((pic) => pic.picture_small);
  console.log(artistPicture);

  //gets specific artist name:
  function getArtistName() {
    const getNestedObject = (nestedObj, pathArr) => {
      return pathArr.reduce(
        (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
        nestedObj
      );
    };

    const name = getNestedObject(artistSearch, ["0"]);

    const artistName = name?.name;
    console.log(artistName);
  }

  getArtistName();
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<StarterPage />} />
        <Route
          path="/login"
          element={<LoginPage setCurrentUser={setCurrentUser} />}
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
