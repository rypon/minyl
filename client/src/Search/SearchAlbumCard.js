import React, { useState } from "react";

import { Dropdown, Button, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Modal, message } from "antd";

function SearchAlbumCard({
  album,
  currentUser,
  // albumCollection,
  // setAlbumCollection,
}) {
  function handleAddToCollection(e) {
    e.preventDefault();
    const newAlbum = {
      deezer_album_id: album.id,
      album_image: album.cover_xl,
      album_name: album.title,
      deezer_artist_id: album.artist.id,
      genre: album.genre_id,
      num_tracks: album.nb_tracks,
      artist_name: album.artist.name,
      artist_image: album.artist.picture_xl,
      user_id: currentUser?.id,
    };
    fetch("/albums", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAlbum),
    }).then((r) => r.json());
    success();
    // const newArray = [...albumCollection, newAlbum];
    // setAlbumCollection(newArray);
    // console.log(albumCollection);
  }
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const success = () => {
    const success = message.success("Vinyl Added!", 0);
    setTimeout(success, 2500);
  };
  return (
    // <Card>
    //   <img src={`${album.cover_xl}`} alt={album.artist.name} size="small" />
    //   <Card.Content>
    //     <Card.Header>{album.title}</Card.Header>
    //     <Card.Meta>
    //       <span className="released">{album.artist.name}</span>
    //     </Card.Meta>
    //   </Card.Content>
    //   <Button onClick={handleAddToCollection}>Add to Collection</Button>
    // </Card>
    <Card link={true}>
      <img src={`${album.cover_xl}`} alt={album.artist.name} size="small" />
      <Card.Content>
        <Card.Header>{album.title}</Card.Header>
        <Card.Meta>
          <span className="released">{album.artist.name}</span>
        </Card.Meta>
      </Card.Content>

      <Card.Content>
        <Dropdown text="Options" direction="right">
          <Dropdown.Menu>
            <Dropdown.Item text="Add" onClick={handleAddToCollection} />
            <Dropdown.Item text="Listen" onClick={showModal} />
          </Dropdown.Menu>
        </Dropdown>
      </Card.Content>
      <Modal
        title="Play some tracks"
        centered={true}
        visible={isModalVisible}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        width={1000}
      >
        <div style={{ textAlign: "center" }}>
          <iframe
            title="deezer-widget"
            src={`https://widget.deezer.com/widget/dark/album/${album?.id}`}
            width="100%"
            height="300"
            frameBorder="0"
            allowtransparency="true"
            allow="encrypted-media; clipboard-write"
          ></iframe>
        </div>
      </Modal>
    </Card>
  );
}

export default SearchAlbumCard;
