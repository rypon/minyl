import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../App.css";
import { Button } from "antd";

function AlbumCollectionCard({ album }) {
  const deleteVinyl = () => {
    fetch(`/albums/${album.id}`, {
      method: "DELETE",
    });
    window.location.reload();
  };
  return (
    <Card link={true}>
      <img src={`${album.album_image}`} alt={album.artist_name} size="small" />
      <Card.Content>
        <Card.Header>{album.album_name}</Card.Header>
        <Card.Meta>
          <span className="released">{album.artist_name}</span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <Link to={`/album/${album.id}/review`}>
          <Button>Write Review</Button>
        </Link>
        <Link to={`/album/${album.id}/view`}>
          <Button>View Album</Button>
        </Link>
        <Button onClick={deleteVinyl}>Remove</Button>
      </Card.Content>
    </Card>
  );
}

export default AlbumCollectionCard;
