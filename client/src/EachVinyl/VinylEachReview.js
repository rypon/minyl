import React from "react";
import { Image, Item, Divider } from "semantic-ui-react";
import { BorderOutlined } from "@ant-design/icons";

const VinylEachReview = ({ review }) => (
  <Item.Group style={{ width: "900px" }}>
    <Item>
      {/* <Item.Image
        size="tiny"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      /> */}

      <Item.Content>
        <Item.Header style={{ marginBottom: "15px" }}>
          Rating: {review.review_rating}
        </Item.Header>
        {/* <Item.Description>{review.review_text}</Item.Description> */}
        <p>{review.review_text}</p>
      </Item.Content>
    </Item>
    <Divider horizontal>
      <BorderOutlined />
    </Divider>
  </Item.Group>
);

export default VinylEachReview;
