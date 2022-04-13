import React from "react";
import SearchAlbumCard from "./SearchAlbumCard";

import { Card } from "semantic-ui-react";

function SearchAlbumContainer({
  searchAlbum,
  currentUser,
  albumCollection,
  setAlbumCollection,
}) {
  const searchCards = searchAlbum?.map((album) => (
    <SearchAlbumCard
      key={album.id}
      album={album}
      artist={album.artist.name}
      currentUser={currentUser}
      albumCollection={albumCollection}
      setAlbumCollection={setAlbumCollection}
    />
  ));

  return <Card.Group itemsPerRow={5}>{searchCards}</Card.Group>;
}

export default SearchAlbumContainer;
