import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import "../App.css";

function VinylView({ currentUser }) {
  const [vinyl, setVinyl] = useState(null);
  const [vinylTracks, setVinylTracks] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/albums/${id}`)
      .then((r) => r.json())
      .then((data) => setVinyl(data));
  }, [id]);

  const deezerAlbumId = vinyl?.deezer_album_id;

  const vinylInfoURL = `https://api.deezer.com/album/${deezerAlbumId}`;
  console.log(vinylInfoURL);

  useEffect(() => {
    fetch(`https://api.deezer.com/album/${deezerAlbumId}`)
      .then((r) => r.json())
      .then((data) => setVinylTracks(data));
  }, []);

  console.log(vinylTracks);

  return (
    <div>
      <Row align="center">
        <Col>
          {" "}
          <h2
            style={{
              marginTop: "25px",
              fontSize: "32px",
            }}
          >
            {vinyl?.artist_name}
          </h2>
        </Col>
      </Row>
      <Row align="center">
        <Col justify="center">
          <h3
            style={{
              marginBottom: "25px",
            }}
          >
            {vinyl?.album_name}
          </h3>
        </Col>
      </Row>
      <Row align="center">
        <Col>
          <img
            className="vinyl"
            src={vinyl?.album_image}
            alt={vinyl?.album_image}
          ></img>
        </Col>
      </Row>

      <Row align="center"></Row>
      <Row align="center">
        <iframe
          title="deezer-widget"
          src={`https://widget.deezer.com/widget/dark/album/${deezerAlbumId}`}
          width="75%"
          height="300"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media; clipboard-write"
        ></iframe>
      </Row>
    </div>
  );
}

export default VinylView;
