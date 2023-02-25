import { Button, Card, Form, Input, message, Typography } from "antd";
import { Link } from "react-router-dom";

const onFinish = () => {
  message.success("Submit success!");
};

const onFinishFailed = () => {
  message.error("Submit failed!");
};

export const Signup: React.FC = () => {
  return (
    <div
      style={{
        margin: "auto",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Card bordered={false} style={{ width: "fit-content" }}>
        <Form
          name="basic"
          labelCol={{ span: 10 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 800 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username (email)"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Repeat password"
            name="repeat-password"
            rules={[
              { required: true, message: "Please repeat your password!" }
            ]}
          >
            <Input.Password />
          </Form.Item>
          <Link to="/login">
            <Typography
              style={{
                marginTop: "1rem",
                marginBottom: "0.5rem",
                textAlign: "right"
              }}
            >
              I already have an account
            </Typography>
          </Link>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
