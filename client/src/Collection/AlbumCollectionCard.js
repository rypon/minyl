import React from "react";
import { Dropdown, Card } from "semantic-ui-react";
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
        {/* 
        <Menu size="large" style={{ width: "91px" }}>
          <Dropdown text="More" options={options} simple item />
        </Menu> */}
        {/* <Link to={`/album/${album.id}/review`}>
          <Button>Write Review</Button>
        </Link>
        <Link to={`/album/${album.id}/view`}>
          <Button>View Album</Button>
        </Link>
        <Button onClick={deleteVinyl}>Remove</Button> */}
      </Card.Content>
    </Card>
  );
}

export default AlbumCollectionCard;
