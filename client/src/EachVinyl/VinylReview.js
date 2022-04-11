import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import "../App.css";
import VinylForm from "./VinylForm";
import VinylDisplayReview from "./VinylDisplayReview";

function Vinyl({ currentUser }) {
  const [vinyl, setVinyl] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/albums/${id}`)
      .then((r) => r.json())
      .then((data) => setVinyl(data));
  }, [id]);

  console.log(vinyl);

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
    window.location.reload();
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
        <VinylForm
          addNewReview={addNewReview}
          setNewReview={setNewReview}
          setNewRating={setNewRating}
        />
      </Row>
      <Row align="center">
        <VinylDisplayReview currentUser={currentUser} />
      </Row>
    </div>
  );
}

export default Vinyl;
