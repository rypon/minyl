import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function VinylDisplayReview({ currentUser }) {
  const [getReviews, setGetReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/albums/${id}/reviews/`)
      .then((r) => r.json())
      .then((data) => setGetReviews(data));
  }, [id]);

  console.log(getReviews[0]);

  return <div>setGetReviews</div>;
}

export default VinylDisplayReview;
