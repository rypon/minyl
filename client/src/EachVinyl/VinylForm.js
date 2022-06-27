import React from "react";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";

import "../App.css";
import { Input, Button, InputNumber, Divider } from "antd";
import { Col } from "antd";
const { TextArea } = Input;
function VinylForm({ addNewReview, setNewRating, setNewReview }) {
  function onChange(value) {
    setNewRating(value);
  }

  return (
    <div>
      <div>
        <h3>Write a Review</h3>
        <TextArea
          style={{ height: 120, width: 900, borderRadius: 5 }}
          placeholder="Write a Reivew"
          onChange={(e) => setNewReview(e.target.value)}
        />
        <h3>Rating</h3>
        <InputNumber
          min={1}
          max={10}
          stringMode={true}
          onChange={onChange}
          placeholder="Rating"
          style={{ borderRadius: 5 }}
        />
      </div>
      <div style={{ textAlign: "center" }}>
        <Button
          type="primary"
          htmlType="submit"
          shape="round"
          onClick={addNewReview}
          style={{ marginTop: "15px" }}
        >
          Submit
        </Button>
        <Col flex="auto">
          <Divider orientationMargin={50}>
            <h1>Reviews & Ratings</h1>
          </Divider>
        </Col>
      </div>
    </div>
  );
}

export default VinylForm;
