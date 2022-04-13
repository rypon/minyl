import React from "react";
import AlbumCollectionCard from "./AlbumCollectionCard";

import { Card } from "semantic-ui-react";

function AlbumCollectionContainer({ albumCollection, setCount, count }) {
  const collection = albumCollection?.map((album) => (
    <AlbumCollectionCard
      key={album.id}
      album={album}
      artist={album.artist_name}
      albumCollection={albumCollection}
      setCount={setCount}
      count={count}
    />
  ));

  return (
    <div>
      <Card.Group itemsPerRow={5}>{collection}</Card.Group>
    </div>
  );
}

export default AlbumCollectionContainer;
