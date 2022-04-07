import React from "react";
import CurrentTopAlbumsCard from "./CurrentTopAlbumsCard";

import { Card } from "semantic-ui-react";

function CurrentTopAlbumContainer({ albums }) {
  const topAlbums = albums.map((album) => (
    <CurrentTopAlbumsCard
      key={album.id}
      album={album}
      artist={album.artist.name}
    />
  ));

  return <Card.Group itemsPerRow={5}>{topAlbums}</Card.Group>;
}

export default CurrentTopAlbumContainer;
