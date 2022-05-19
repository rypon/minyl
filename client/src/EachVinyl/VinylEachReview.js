import React from "react";
import { Feed } from "semantic-ui-react";

function VinylEachReview({ review }) {
  return (
    <Feed>
      <Feed.Event>
        <Feed.Content>
          <Feed.Summary>
            <b>Rating:</b> {review.review_rating}
          </Feed.Summary>
          <Feed.Extra text>{review.review_text}</Feed.Extra>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  );
}

export default VinylEachReview;
