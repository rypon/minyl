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
import AlbumCollectionPage from "./Collection/AlbumCollectionPage";
import Vinyl from "./EachVinyl/Vinyl";

function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [albumCollection, setAlbumCollection] = useState([]);
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

  useEffect(() => {
    fetch(`http://localhost:4000/albums/`)
      .then((res) => res.json())
      .then((data) => {
        setAlbumCollection(data);
      });
  }, []);

  // const albumID = albumCollection?.map((album) => album);
  // console.log(albumID);

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
        <Route
          exact
          path="/"
          element={
            <StarterPage
              handleLogout={handleLogout}
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
              isAuthenticated={isAuthenticated}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />
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
          path="/collection"
          element={
            <AlbumCollectionPage
              albumCollection={albumCollection}
              setAlbumCollection={setAlbumCollection}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={currentUser ? <LanderPage /> : <NotAuthorized />}
        />
        <Route
          exact
          path={`/album/:id`}
          element={<Vinyl albumCollection={albumCollection} />}
        />
      </Routes>
    </div>
  );
}

export default App;
