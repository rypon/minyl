import React from "react";
import { Button, Card } from "semantic-ui-react";

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
    // const newArray = [...albumCollection, newAlbum];
    // setAlbumCollection(newArray);
    // console.log(albumCollection);
  }

  return (
    <Card>
      <img src={`${album.cover_xl}`} alt={album.artist.name} size="small" />
      <Card.Content>
        <Card.Header>{album.title}</Card.Header>
        <Card.Meta>
          <span className="released">{album.artist.name}</span>
        </Card.Meta>
      </Card.Content>
      <Button onClick={handleAddToCollection}>Add to Collection</Button>
    </Card>
  );
}

export default SearchAlbumCard;
