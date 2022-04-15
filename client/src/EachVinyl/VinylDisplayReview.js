import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import VinylEachReview from "./VinylEachReview";
import { Row, Col } from "antd";
import "../App.css";
import { Empty } from "antd";

function VinylDisplayReview({ setGetReviews, getReviews }) {
  const { id } = useParams();

  useEffect(() => {
    if (id)
      fetch(`/albums/${id}/reviews/`)
        .then((r) => r.json())
        .then((data) => setGetReviews(data));
  }, [id]);
  const reviews = getReviews?.map((review) => (
    <VinylEachReview key={review.id} review={review} />
  ));

  return (
    <div style={{ width: "100%" }}>
      <Row gutter={[16, 16]}>
        <Col span={24} style={{ paddingBottom: "25px" }}>
          {getReviews.length === 0 ? (
            <Empty description={"No reviews - yet!"} />
          ) : (
            reviews
          )}
        </Col>
      </Row>
    </div>
  );
}

export default VinylDisplayReview;
