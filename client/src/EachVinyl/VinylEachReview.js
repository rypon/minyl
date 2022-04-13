import React from "react";
import { Image, Item } from "semantic-ui-react";

const ItemExampleItems = ({ review }) => (
  <Item.Group>
    <Item style={{ width: "200px" }}>
      <Item.Image
        size="tiny"
        src="https://react.semantic-ui.com/images/wireframe/image.png"
      />

      <Item.Content style={{ width: "500px" }}>
        <Item.Header as="a">Rating: {review.review_rating}</Item.Header>
        <Item.Description>{review.review_text}</Item.Description>
      </Item.Content>
    </Item>
  </Item.Group>
);

export default ItemExampleItems;
