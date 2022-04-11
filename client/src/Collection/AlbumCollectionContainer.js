import React from "react";
import AlbumCollectionCard from "./AlbumCollectionCard";

import { Card } from "semantic-ui-react";

function AlbumCollectionContainer({ albumCollection, deleteVinyl }) {
  console.log(albumCollection);
  const collection = albumCollection?.map((album) => (
    <AlbumCollectionCard
      key={album.id}
      album={album}
      artist={album.artist_name}
      deleteVinyl={deleteVinyl}
    />
  ));

  console.log(collection);

  return (
    <div>
      <Card.Group itemsPerRow={5}>{collection}</Card.Group>
    </div>
  );
}

export default AlbumCollectionContainer;
