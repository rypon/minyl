import React, { useState, useEffect } from "react";
import AlbumCollectionCard from "./AlbumCollectionCard";

import { Card } from "semantic-ui-react";

function AlbumCollectionContainer() {
  const [albumCollection, setAlbumCollection] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/albums")
      .then((res) => res.json())
      .then((data) => {
        setAlbumCollection(data);
      });
  }, []);

  console.log(albumCollection);

  const collection = albumCollection?.map((album) => (
    <AlbumCollectionCard
      key={album.id}
      album={album}
      artist={album.artist_name}
    />
  ));

  return (
    <div>
      <Card.Group itemsPerRow={5}>{collection}</Card.Group>
      {
        <iframe
          title="deezer-widget"
          src="https://widget.deezer.com/widget/dark/album/114283082"
          width="100%"
          height="300"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media; clipboard-write"
        ></iframe>
      }
    </div>
  );
}

export default AlbumCollectionContainer;
