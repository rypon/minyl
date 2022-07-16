import React from "react";
import { Grid, Image, Icon } from "semantic-ui-react";

function About() {
  return (
    <div style={{ marginTop: "25px" }}>
      <Grid columns={3}>
        <Grid.Row>
          <Grid.Column></Grid.Column>
          <Grid.Column textAlign="center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ryan-p-oneill/"
            >
              <Icon name="linkedin" size="big" color="blue" />
            </a>

            <a target="_blank" href="https://github.com/rypon">
              <Icon name="github" size="big" color="black" />
            </a>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <Grid columns={1} centered>
        <Grid.Row>
          <Grid.Column width={10}>
            <h3>
              Final project for Flatiron School's Software Engineering bootcamp.
              My inspiration for Minyl (My Vinyl) came after I started
              collecting vinyls over the past 2 years. I had been logging my
              collection list in a Google Sheets with what I currently own, what
              I was to own and haven't found yet, when it was purchased and how
              much it cost.{" "}
            </h3>
            <h3>
              I used Semantic UI and Ant Design for my design libraries as they
              offer so many components. I had never used Ant Design prior to
              this, so it was fun to play around with and see what they offer.
            </h3>
            <h3>
              All music information was used with the Deezer API. I was able to
              fetch the appropriate data and send it to my backend which was
              used for my fetch requests to show the correct information based
              on the current user that was logged in.
            </h3>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

export default About;
