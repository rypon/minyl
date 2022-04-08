import "antd/dist/antd.css";
import "../App.css";
import React, { useState, useEffect } from "react";
import CurrentTopAlbumsContainer from "./CurrentTopAlbumsContainer";
import { Row, Col } from "antd";
import SearchAlbum from "./SearchAlbum";

function LanderPage() {
  const [getAlbums, setGetAlbums] = useState([]);

  useEffect(() => {
    fetch("https://api.deezer.com/chart/top?limit=50")
      .then((res) => res.json())
      .then((data) => {
        setGetAlbums(data.albums.data);
      });
  }, []);

  const topAlbums = getAlbums;

  const albums = topAlbums?.map((album) => album);
  console.log(albums);

  return (
    <div>
      <Row align="center">
        <Col>
          {" "}
          <h2
            style={{
              marginTop: "25px",
              marginBottom: "25px",
              fontSize: "32px",
            }}
          >
            Today's hottest music
          </h2>
        </Col>
      </Row>
      <Row align="center">
        <Col>
          <SearchAlbum />
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={2}> </Col>
        <Col span={2}> </Col>
        <Col span={2}> </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={2}> </Col>

        <Col md={20}>
          <CurrentTopAlbumsContainer albums={albums} />
        </Col>
        <Col span={2}> </Col>
      </Row>
    </div>
  );
}

export default LanderPage;
