import React from "react";
import CurrentTopAlbumsCard from "./CurrentTopAlbumsCard";

import { Card } from "semantic-ui-react";

function CurrentTopAlbumContainer({ curAlbums }) {
  const CurTopCards = curAlbums?.map((album) => (
    <CurrentTopAlbumsCard
      key={album.id}
      album={album}
      artist={album.artist.name}
    />
  ));

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Trending Albums</h2>
      <Card.Group itemsPerRow={5}>{CurTopCards}</Card.Group>
    </div>
  );
}

export default CurrentTopAlbumContainer;
