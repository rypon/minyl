import React, { useState, useEffect } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../App.css";
import AlbumCollectionContainer from "./AlbumCollectionContainer";
import { Empty } from "antd";
function AlbumCollectionPage({
  albumCollection,
  albumId,
  currentUser,
  setAlbumCollection,
}) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (currentUser)
      fetch(`http://localhost:4000/users/${currentUser.id}/albums`)
        .then((res) => res.json())
        .then((data) => {
          setAlbumCollection(data);
          setCount(0);
        });
  }, [currentUser, count]);

  console.log(albumCollection);

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
            Your Vinyl Collection
          </h2>
        </Col>
      </Row>
      <Row align="center">
        <Col></Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={2}> </Col>
        <Col span={2}> </Col>
        <Col span={2}> </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={2}> </Col>

        <Col md={20}>
          {albumCollection.length === 0 ? (
            <Empty description={"Collection is empty!"} />
          ) : (
            <AlbumCollectionContainer
              albumCollection={albumCollection}
              albumId={albumId}
              currentUser={currentUser}
              setCount={setCount}
              count={count}
            />
          )}
        </Col>
        <Col span={2}> </Col>
      </Row>
    </div>
  );
}

export default AlbumCollectionPage;
