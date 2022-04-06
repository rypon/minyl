import React from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Form, Input, Button, Checkbox } from "antd";
import { Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

function LoginPage() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div>
      <Row gutter={[8, 16]}>
        <Col span={8}></Col>
        <Col span={8}>
          <h1
            style={{
              textAlign: "center",
              marginTop: "100px",
            }}
          >
            Login
          </h1>
        </Col>
        <Col span={8}></Col>

        <Col span={8}></Col>
        <Col
          span={8}
          //   style={{
          //     textAlign: "center",
          //   }}
        >
          {" "}
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            size="large"
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item
                style={{
                  textAlign: "left",
                }}
                name="remember"
                valuePropName="checked"
                noStyle
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item
              style={{
                textAlign: "center",
              }}
            >
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button"
                shape="round"
                style={{
                  margin: "auto",
                }}
              >
                Log in
              </Button>
              {/* Or <a href="">register now!</a> */}
            </Form.Item>
          </Form>
        </Col>
        <Col span={8}></Col>
      </Row>
    </div>
  );
}

export default LoginPage;
