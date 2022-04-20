import React, { useEffect } from "react";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";

import "../App.css";
import { Button } from "antd";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import HomeCarousel from "./HomeCarousel";

function StarterPage({ handleLogout, currentUser }) {
  useEffect(() => {
    if (currentUser) handleLogout();
  }, [currentUser]);

  return (
    <div>
      <Row>
        <Col span={6}></Col>

        <Col span={12}>
          <HomeCarousel />
        </Col>
        <Col></Col>
      </Row>
      <Row justify="center">
        <Col span={8}></Col>

        <Col span={4}>
          <Link to="/login">
            <Button
              className="button"
              type="primary"
              size="large"
              shape="round"
            >
              Login
            </Button>
          </Link>
        </Col>
        <Col span={4}>
          <Link to="/signup">
            <Button
              className="button"
              class="reg"
              type="primary"
              size="large"
              shape="round"
            >
              Signup
            </Button>
          </Link>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
}

export default StarterPage;
