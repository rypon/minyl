import React from "react";
import { Button, Card } from "semantic-ui-react";

function CurrentTopAlbumsCard({ album }) {
  return (
    <Card>
      <img src={`${album.cover_xl}`} alt={album.artist.name} size="small" />
      <Card.Content>
        <Card.Header>{album.title}</Card.Header>
        <Card.Meta>
          <span className="released">{album.artist.name}</span>
        </Card.Meta>
      </Card.Content>
      {/* <Button onClick={() => console.log(album)}>Add to Collection</Button> */}
    </Card>
  );
}

export default CurrentTopAlbumsCard;
