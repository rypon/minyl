import React, { useState } from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Layout, Menu, Avatar } from "antd";
import {
  CustomerServiceOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
const { Header } = Layout;
const { SubMenu } = Menu;

function LanderPage() {
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
          <div
            style={{
              color: "white",
              fontSize: 30,
            }}
          >
            Minyl
          </div>
          <Menu
            style={{ marginLeft: "auto", paddingRight: "50px" }}
            onClick={handleClick}
            mode="horizontal"
            theme="dark"
          >
            <Menu.Item key="mail" icon={<CustomerServiceOutlined />}>
              My Collection
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<DownOutlined />} title="Username">
              {/* <Menu.ItemGroup title="Item 1"> */}
              <Menu.Item key="setting:1">
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
              </Menu.Item>
              <Menu.Item key="setting:2">Logout</Menu.Item>
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

export default LanderPage;
