import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import "../App.css";
import VinylForm from "./VinylForm";
import VinylDisplayReview from "./VinylDisplayReview";

function Vinyl({ currentUser, albumCollection }) {
  const [vinyl, setVinyl] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/albums/${id}`)
      .then((r) => r.json())
      .then((data) => setVinyl(data));
  }, [id]);

  const [getReviews, setGetReviews] = useState([]);
  const [newReview, setNewReview] = useState("");
  const [newRating, setNewRating] = useState(0);

  function addNewReview(e) {
    e.preventDefault();
    const review = {
      review_text: newReview,
      review_rating: newRating,
      user_id: currentUser?.id,
    };
    fetch(`/albums/${id}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(review),
    }).then((r) => r.json());
    const newReviewArr = [...getReviews, review];
    setGetReviews(newReviewArr);
  }

  return (
    <div>
      <Row align="center">
        <Col>
          {" "}
          <h2
            style={{
              marginTop: "25px",
              fontSize: "32px",
            }}
          >
            {vinyl?.artist_name}
          </h2>
        </Col>
      </Row>
      <Row align="center">
        <Col justify="center">
          <h3
            style={{
              marginBottom: "25px",
            }}
          >
            {vinyl?.album_name}
          </h3>
        </Col>
      </Row>
      <Row align="center">
        <Col>
          <img
            className="vinyl"
            src={vinyl?.album_image}
            alt={vinyl?.album_image}
          ></img>
        </Col>
      </Row>
      <Row align="center">
        <Col flex="0 1 900px">
          <VinylForm
            addNewReview={addNewReview}
            setNewReview={setNewReview}
            setNewRating={setNewRating}
          />
        </Col>
      </Row>
      <Row align="center">
        <Col flex="0 1 900px">
          <VinylDisplayReview
            setGetReviews={setGetReviews}
            getReviews={getReviews}
            currentUser={currentUser}
            albumCollection={albumCollection}
          />
        </Col>
      </Row>
    </div>
  );
}

export default Vinyl;
