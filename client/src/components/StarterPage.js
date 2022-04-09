import React from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Button } from "antd";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";

function StarterPage({ handleLogout, currentUser, isAuthenticated }) {
  // function logoutIfStillAuthenticated() {
  //   if (isAuthenticated === true) {
  //     handleLogout();
  //     window.location.reload();
  //   } else {
  //     console.log(currentUser);
  //   }
  // }

  // logoutIfStillAuthenticated();
  return (
    <div>
      <Row>
        <Col span={8}></Col>
        <Col span={8}>
          HOME PAGE{" "}
          <div>
            <Link to="/login">
              <Button type="primary">Login</Button>
            </Link>
          </div>
          <div>
            <Link to="/signup">
              <Button type="primary">Signup</Button>
            </Link>
          </div>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
}

export default StarterPage;
