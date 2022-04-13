import React from "react";
import { Dropdown, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "../App.css";

function AlbumCollectionCard({ album, setCount, count }) {
  const deleteVinyl = () => {
    fetch(`/albums/${album.id}`, {
      method: "DELETE",
    }).then(setCount(count + 1));
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
        <Dropdown text="Options" direction="right">
          <Dropdown.Menu>
            <Dropdown.Item
              text="Review"
              as={Link}
              to={`/album/${album.id}/review`}
            />
            <Dropdown.Item
              text="More"
              as={Link}
              to={`/album/${album.id}/view`}
            />
            <Dropdown.Divider />
            <Dropdown.Item icon="trash" text="Delete" onClick={deleteVinyl} />
          </Dropdown.Menu>
        </Dropdown>
      </Card.Content>
    </Card>
  );
}

export default AlbumCollectionCard;
