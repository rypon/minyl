import React, { useState } from "react";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";
import "../App.css";
import { Layout, Menu, Avatar } from "antd";
import {
  CustomerServiceOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Header } = Layout;
const { SubMenu } = Menu;

function HeaderLoggedIn({ handleLogout, currentUser, handleCollection }) {
  const [state, setState] = useState("");

  function handleClick(e) {
    console.log("click ", e);
    setState({ current: e.key });
  }

  const profileHeader = `Hello, ${currentUser.username}`;

  return (
    <div>
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-betweeen",
          }}
        >
          <Link to="/home">
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
            <Link to="/collection">
              <Menu.Item
                key="mail"
                icon={<CustomerServiceOutlined onClick={handleCollection} />}
              >
                My Collection
              </Menu.Item>
            </Link>
            <SubMenu
              key="SubMenu"
              icon={<DownOutlined />}
              title={profileHeader}
            >
              {/* <Menu.ItemGroup title="Item 1"> */}
              <Menu.Item key="setting:1">
                <Link to="/profile">
                  <div>
                    <Avatar
                      style={{
                        marginRight: "10px",
                      }}
                      size="small"
                      icon={<UserOutlined />}
                    />
                    Profile
                  </div>
                </Link>
              </Menu.Item>
              <Menu.Item key="setting:2" onClick={handleLogout}>
                Logout
              </Menu.Item>
              {/* </Menu.ItemGroup> */}
              {/* <Menu.ItemGroup title="Item 2"> */}
              {/* <Menu.Item key="setting:3">Option 3</Menu.Item> */}
              {/* <Menu.Item key="setting:4">Option 4</Menu.Item> */}
              {/* </Menu.ItemGroup> */}
            </SubMenu>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
}

export default HeaderLoggedIn;
