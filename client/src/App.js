import "./App.css";
import React, { useState, useEffect } from "react";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import StarterPage from "./components/StarterPage";
import About from "./components/About";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import LanderPage from "./components/LanderPage";
import HeaderLoggedIn from "./components/HeaderLoggedIn";
import HeaderLoggedOut from "./components/HeaderLoggedOut";
import NotAuthorized from "./components/NotAuthorized";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  //Authenticate
  useEffect(() => {
    fetch("/authorized_user").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setIsAuthenticated(true);
          setCurrentUser(user);
        });
      }
    });
  }, []);

  //logout
  const handleLogout = () => {
    fetch("/logout", {
      method: "DELETE",
    });
    setCurrentUser(null);
    setIsAuthenticated(false);
    navigate("/");
  };

  return (
    <div className="App">
      <div>
        {currentUser ? (
          <HeaderLoggedIn
            handleLogout={handleLogout}
            currentUser={currentUser}
          />
        ) : (
          <HeaderLoggedOut />
        )}
      </div>
      <Routes>
        <Route exact path="/" element={<StarterPage />} />
        <Route
          path="/login"
          element={
            <LoginPage
              setCurrentUser={setCurrentUser}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
        <Route path="/signup" element={<SignUpPage />} />
        <Route
          path="/about"
          element={
            <About
              currentUser={currentUser}
              handleLogout={handleLogout}
              isAuthenticated={isAuthenticated}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={currentUser ? <LanderPage /> : <NotAuthorized />}
        />
      </Routes>
    </div>
  );
}

export default App;

// const DeezerPublicApi = require("deezer-public-api");
// let deezer = new DeezerPublicApi();

// const [artist, setArtist] = useState([]);

// //Search an artist
// useEffect(() => {
//   deezer.search.artist("ILYSH").then(function (result) {
//     setArtist(result);
//   });
// }, []);

// const artistSearch = artist.data;
// console.log(artistSearch);
// //get artist image url
// const artistPicture = artistSearch?.map((pic) => pic.picture_small);
// console.log(artistPicture);

// //gets specific artist name:
// function getArtistName() {
//   const getNestedObject = (nestedObj, pathArr) => {
//     return pathArr.reduce(
//       (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
//       nestedObj
//     );
//   };

//   const name = getNestedObject(artistSearch, ["0"]);

//   const artistName = name?.name;
//   console.log(artistName);
// }

// getArtistName();
