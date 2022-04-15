import "antd/dist/antd.css";
import "../App.css";
import React, { useState, useEffect } from "react";
import SearchAlbumContainer from "../Search/SearchAlbumContainer";
import { Row, Col } from "antd";
import SearchAlbum from "../Search/SearchAlbum";
import CurrentTopAlbumContainer from "../CurrentTopAlbums/CurrentTopAlbumsContainer";

function LanderPage({ currentUser, albumCollection, setAlbumCollection }) {
  const [currentAlbums, setCurrentAlbums] = useState([]);

  useEffect(() => {
    fetch("https://api.deezer.com/chart/top?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setCurrentAlbums(data.albums.data);
      });
  }, []);

  const curAlbums = currentAlbums?.map((album) => album);
  // console.log(curAlbums);

  const [albumSearch, setAlbumSearch] = useState([]);
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  let url = `https://api.deezer.com/search/album?q=${search}`;
  // console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setAlbumSearch(data.data);
      });
  }, [count]);

  // console.log(albumSearch);
  // console.log(search);

  const searchAlbum = albumSearch?.map((album) => album);
  // console.log(searchAlbum);
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
            Search for your vinyls
          </h2>
        </Col>
      </Row>
      <Row align="center">
        <Col>
          <SearchAlbum
            setCount={setCount}
            setSearch={setSearch}
            count={count}
            search={search}
          />
        </Col>
      </Row>
      {/* <Row gutter={[8, 8]}>
        <Col span={2}> </Col>
        <Col span={2}> </Col>
        <Col span={2}> </Col>
      </Row> */}
      <Row gutter={[8, 8]}>
        <Col span={2}> </Col>

        <Col md={20}>
          {albumSearch === undefined ? (
            <CurrentTopAlbumContainer curAlbums={curAlbums} />
          ) : (
            <SearchAlbumContainer
              currentUser={currentUser}
              searchAlbum={searchAlbum}
              albumCollection={albumCollection}
              setAlbumCollection={setAlbumCollection}
            />
          )}
        </Col>
        <Col span={2}> </Col>
      </Row>
    </div>
  );
}

export default LanderPage;
