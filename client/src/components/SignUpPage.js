import React, { useState, useEffect } from "react";
import "antd/dist/antd.css";
import "../App.css";
import { Form, Input, Button, Spin } from "antd";
import { Row, Col, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function SignUpPage({ handleLogout, currentUser }) {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) handleLogout();
  }, [currentUser]);

  const loading = () => {
    const hide = message.loading("One moment please...", 0);
    // Dismiss manually and asynchronously
    setTimeout(hide, 2500);
    setTimeout(() => navigate("/login"), 2500);
  };

  const success = () => {
    const success = message.success("Account created successfully!", 0);
    setTimeout(success, 5000);
  };

  function onSubmit() {
    // e.preventDefault();
    const newUser = {
      username: newUsername,
      password: newPassword,
      email: newEmail,
      profile_image: "",
    };
    if (newUser.username !== "") {
      if (newUser.password.length >= 5) {
        fetch("/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }).then((r) => r.json());
        loading();
        setTimeout(success, 2500);

        // } else {
        // alert("Password must be between 5 and 10 characters");
      }
      // } else {
      // alert("Must enter a username");
    }
  }
  const onFinish = (values) => {
    onSubmit();
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
            onFinishFailed={(error) => {
              console.log({ error });
            }}
            size="large"
            autoComplete="off"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 14 }}
          >
            <Form.Item
              name="username"
              label="Username"
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
              hasFeedback
              onChange={(e) => setNewUsername(e.target.value)}
            >
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
                { min: 5, message: "Username must be minimum 5 characters." },
              ]}
              hasFeedback
              onChange={(e) => setNewPassword(e.target.value)}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item
              name="Password Confirmation"
              label="Confirm Password"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered does not match."
                    );
                  },
                }),
              ]}
              hasFeedback
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>

            <Form.Item
              style={{
                textAlign: "right",
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
                // onClick={onSubmit}
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
