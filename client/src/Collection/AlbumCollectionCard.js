import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../App.css";

function AlbumCollectionCard({ album }) {
  return (
    <Card link={true} href={`/album/${album.id}`}>
      <img src={`${album.album_image}`} alt={album.artist_name} size="small" />
      <Card.Content>
        <Card.Header>{album.album_name}</Card.Header>
        <Card.Meta>
          <span className="released">{album.artist_name}</span>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
}

export default AlbumCollectionCard;
