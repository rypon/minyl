import React from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Layout } from "antd";
const { Footer, Content } = Layout;

function LanderPage() {
  return (
    <div>
      <Layout style={{ height: "100vh" }}>
        <Layout>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
}

export default LanderPage;
