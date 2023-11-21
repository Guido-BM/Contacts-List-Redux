import React, { useState } from "react";
import { Button, Form, Input, Modal, message } from "antd";
import { useNavigate, link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signIn, signOut } from "../redux/AuthReducers";

const authorizedUsers = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "user",
    password: "user",
  },
];
const LoginForm = ({ open, onCreate, onCancel }) => {
  const [form] = Form.useForm();
  const user = useSelector((state) => state.user);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);
  return (
    <Modal
      open={open}
      title="Login"
      okText="Login"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form form={form} layout="vertical">
        <Form.Item
          name="username"
          label="Username"
          rules={[{ required: true, message: "Please enter your username" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: "Please enter your password" }]}
        >
          <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};

const Login = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const isAuthenticated = useSelector((state) => state.isAuthenticated);

  const onCreate = (values) => {
    const user = authorizedUsers.find(
      (user) =>
        user.username === values.username && user.password === values.password
    );

    if (user) {
      message.success("Login successful");
      dispatch(signIn(user));
      setOpen(false);
      navigate("/ContactList");
    } else {
      message.error("Invalid username or password");
    }
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <>
      {isAuthenticated ? (
        <Button type="primary" onClick={handleLogout}>
          Log Out
        </Button>
      ) : (
        <Button type="primary" onClick={() => setOpen(true)}>
          Log In
        </Button>
      )}
      <p className="you_can_use_password__adminone__username__adminone">
        Check this 'paragraph' in the DOM
      </p>
      <LoginForm
        open={open}
        onCreate={onCreate}
        onCancel={() => setOpen(false)}
      />
    </>
  );
};

export default Login;
