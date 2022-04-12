import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

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
  return getReviews?.map((review) => <div>{review.review_text}</div>);

  // const test = getReviews[0]?.review_text;

  // return <div>{test}</div>;
}

export default VinylDisplayReview;
