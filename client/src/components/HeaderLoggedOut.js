import React, { useState } from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";

const { Header } = Layout;

function HeaderLoggedOut() {
  const [state, setState] = useState("");

  function handleClick(e) {
    console.log("click ", e);
    setState({ current: e.key });
  }
  return (
    <div>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-betweeen",
          }}
        >
          <Link to="/">
            <div
              style={{
                color: "white",
                fontSize: 30,
              }}
            >
              Minyl
            </div>
          </Link>

          <Menu
            style={{ marginLeft: "auto", paddingRight: "50px" }}
            onClick={handleClick}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item key="mail">
              <Link to="/about">
                <span className="nav-text">About</span>
              </Link>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export default HeaderLoggedOut;
