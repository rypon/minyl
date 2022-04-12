import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import VinylEachReview from "./VinylEachReview";
import { Row, Col } from "antd";
import "../App.css";

function VinylDisplayReview({ currentUser, albumCollection }) {
  const [getReviews, setGetReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id)
      fetch(`/albums/${id}/reviews/`)
        .then((r) => r.json())
        .then((data) => setGetReviews(data));
  }, [id]);
  console.log(getReviews);
  const reviews = getReviews?.map(
    (review) => <VinylEachReview key={review.id} review={review} />
    // console.log(review)
  );

  return (
    <div style={{ width: "30%" }}>
      <Row gutter={[16, 16]}>
        <Col span={24}>{reviews}</Col>
      </Row>
    </div>
  );
}

export default VinylDisplayReview;
