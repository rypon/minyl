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
import VinylReview from "./EachVinyl/VinylReview";
import VinylView from "./EachVinyl/VinylView";

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

  // console.log(currentUser.id);

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
    <div>
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
            />
          }
        />
        <Route
          path="/login"
          element={
            <LoginPage
              setCurrentUser={setCurrentUser}
              setIsAuthenticated={setIsAuthenticated}
              handleLogout={handleLogout}
              currentUser={currentUser}
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
              currentUser={currentUser}
              // deleteVinyl={deleteVinyl}
            />
          }
        />
        <Route
          exact
          path="/home"
          element={
            currentUser ? (
              <LanderPage
                currentUser={currentUser}
                albumCollection={albumCollection}
                setAlbumCollection={setAlbumCollection}
              />
            ) : (
              <NotAuthorized />
            )
          }
        />
        <Route
          exact
          path={`/album/:id/review`}
          element={
            <VinylReview
              currentUser={currentUser}
              albumCollection={albumCollection}
            />
          }
        />
        <Route
          exact
          path={`/album/:id/view`}
          element={<VinylView currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
