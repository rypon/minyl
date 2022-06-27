import React, { useState } from "react";
import { Dropdown, Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { Modal, message } from "antd";

import "../App.css";

function AlbumCollectionCard({ album, setCount, count }) {
  const deleteVinyl = () => {
    fetch(`/albums/${album.id}`, {
      method: "DELETE",
    }).then(setCount(count + 1));
    remove();
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const remove = () => {
    const remove = message.error("Vinyl Removed!", 0);
    setTimeout(remove, 2500);
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
            <Dropdown.Item text="Listen" onClick={showModal} />
            <Dropdown.Divider />
            <Dropdown.Item icon="trash" text="Remove" onClick={deleteVinyl} />
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
            src={`https://widget.deezer.com/widget/dark/album/${album?.deezer_album_id}`}
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

export default AlbumCollectionCard;
