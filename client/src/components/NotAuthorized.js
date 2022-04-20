import React from "react";
// import "antd/dist/antd.css";
import "antd/dist/antd.min.css";

import "../App.css";
import { Layout } from "antd";
const { Content } = Layout;

function NotAuthorized() {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Layout>
          <Content>NOT AUTHORIZED</Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default NotAuthorized;
