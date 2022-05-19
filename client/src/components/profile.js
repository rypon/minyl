import React from "react";
import { Card, Grid } from "semantic-ui-react";
import moment from "moment";

function profile({ currentUser, albumCollection }) {
  const date = new Date(currentUser.created_at);
  const convertedDate = moment(date).format("MMMM Do, YYYY");

  function vinylCountMessage() {
    if (albumCollection.length === 0) {
      return "Your collection is empty!";
    } else if (albumCollection.length === 1) {
      return "You have 1 vinyl in your collection!";
    } else {
      return `You have ${albumCollection.length} vinyls in your collection!`;
    }
  }
  return (
    <div style={{ marginTop: "25px" }}>
      <Grid centered>
        <Grid.Column width={5}>
          <Card centered fluid>
            <Card.Content>
              <h1>Hello, {currentUser.username}!</h1>
              <h3>Joined on: {convertedDate}</h3>
              <h3>{vinylCountMessage()}</h3>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default profile;
