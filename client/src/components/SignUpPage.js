import React, { useState } from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Form, Input, Button } from "antd";
import { Row, Col } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  function onSubmit(e) {
    e.preventDefault();
    const newUser = {
      username: newUsername,
      password: newPassword,
      email: newEmail,
      profile_image: "",
    };
    if (newUser.username !== "") {
      if (newUser.password.length >= 5 && newUser.password.length <= 10) {
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }).then((r) => r.json());
        alert("User Created Successfully");
        navigate("/login");
      } else {
        alert("Password must be between 5 and 10 characters");
      }
    } else {
      alert("Must enter a username");
    }
  }

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
            Sign Up
          </h1>
        </Col>
        <Col span={8}></Col>

        <Col span={8}></Col>
        <Col span={8}>
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
              onChange={(e) => setNewUsername(e.target.value)}
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
              onChange={(e) => setNewPassword(e.target.value)}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: "Please input your Email!",
                },
              ]}
              onChange={(e) => setNewEmail(e.target.value)}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="email"
                placeholder="email"
              />
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
                onClick={onSubmit}
              >
                Sign Up
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

export default SignUpPage;
