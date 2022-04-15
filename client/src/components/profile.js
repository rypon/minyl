import React from "react";
import { Card, Icon, Grid, Image } from "semantic-ui-react";

function profile({ currentUser }) {
  const date = new Date(currentUser.created_at);
  console.log(date);
  // const convertedDate = moment(date).format("DD-MM-YYYY");
  // console.log(convertedDate);
  return (
    <div style={{ marginTop: "25px" }}>
      <Grid centered>
        <Grid.Column width={5}>
          <Card centered fluid>
            <Card.Content>
              <h1>Hello, {currentUser.username}!</h1>

              <Card.Meta>
                <span className="date">
                  {/* Joined on: {currentUser.created_at.toDateString()} */}
                </span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default profile;
