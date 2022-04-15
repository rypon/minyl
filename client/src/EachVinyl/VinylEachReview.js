import React from "react";
import { Item, Divider } from "semantic-ui-react";
import { BorderOutlined } from "@ant-design/icons";

const VinylEachReview = ({ review }) => (
  <Item.Group style={{ width: "900px" }}>
    <Item>
      <Item.Content>
        <Item.Header style={{ marginBottom: "15px" }}>
          Rating: {review.review_rating}
        </Item.Header>
        <p>{review.review_text}</p>
      </Item.Content>
    </Item>
    <Divider horizontal>
      <BorderOutlined />
    </Divider>
  </Item.Group>
);

export default VinylEachReview;
