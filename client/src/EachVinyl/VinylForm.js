import React, { useState } from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Input, Button, InputNumber } from "antd";
import { Row, Col } from "antd";
const { TextArea } = Input;
function VinylForm({ addNewReview, setNewRating, setNewReview }) {
  function onChange(value) {
    setNewRating(value);
  }

  return (
    <div>
      <Row align="center">
        <p style={{ marginRight: "10px" }}>Write a Review</p>
        <Col>
          <TextArea
            style={{ height: 120, width: 500 }}
            placeholder="Write a Reivew"
            onChange={(e) => setNewReview(e.target.value)}
          />
        </Col>
      </Row>
      <Row>
        Rating
        <Col>
          <InputNumber min={1} max={10} stringMode={true} onChange={onChange} />
        </Col>
      </Row>
      <Row align="center">
        <Col>
          {" "}
          <Button
            type="primary"
            htmlType="submit"
            shape="round"
            onClick={addNewReview}
            style={{ marginBottom: "25px" }}
          >
            Submit
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default VinylForm;
