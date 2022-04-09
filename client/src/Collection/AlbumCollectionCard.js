import React from "react";
import { Button, Card } from "semantic-ui-react";

function AlbumCollectionCard({ album }) {
  <iframe
    title="deezer-widget"
    src="https://www.deezer.com/album/114283082"
    width="100%"
    height="300"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media; clipboard-write"
  ></iframe>;
  return (
    <Card>
      <img src={`${album.album_image}`} alt={album.artist_name} size="small" />
      <Card.Content>
        <Card.Header>{album.album_name}</Card.Header>
        <Card.Meta>
          <span className="released">{album.artist_name}</span>
        </Card.Meta>
      </Card.Content>
      <Button>More</Button>
    </Card>
  );
}

export default AlbumCollectionCard;
