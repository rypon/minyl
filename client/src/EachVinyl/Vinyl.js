import React, { useState, useEffect } from "react";
import { Row, Col } from 'antd';

import { useParams } from "react-router-dom";

function Vinyl({ albumCollection }) {
  const [vinyl, setVinyl] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`/albums/${id}`)
      .then((r) => r.json())
      .then((data) => setVinyl(data));
  }, [id]);

  console.log(vinyl);

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
            {vinyl?.artist_name}
          </h2>
        </Col>
      </Row>
      <Row align="center">
        <Col>
        <h3
            style={{
              marginBottom: "25px",
              
            }}
          >
            {vinyl?.album_name}
          </h3>
        </Col>
      </Row>
      <Row gutter={[8, 8]}>

        <Col span={2}><img src={vinyl?.album_image} ></img>
        </Col>

      </Row>
      <Row gutter={[8, 8]}>


        
        <Col span={2}> <textarea></textarea></Col>
      </Row>
    </div>
  );
}

export default Vinyl;
