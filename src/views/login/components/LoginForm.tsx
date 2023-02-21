import { CloseCircleOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm: FC = () => {
	const navigate = useNavigate();
	const onFinish = (value: any) => {
		console.log(value);
		message.success("登录成功");
		navigate("/home");
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log(errorInfo);
	};

	return (
		<Form
			name="basic"
			labelCol={{ span: 5 }}
			initialValues={{ remember: true }}
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
			size="large"
			autoComplete="off"
		>
			<Form.Item name="username" rules={[{ required: true, message: "Please input your username" }]}>
				<Input placeholder="用户名: admin / user" prefix={<UserOutlined />} />
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
				<Input placeholder="密码: 123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button icon={<CloseCircleOutlined />}>重置</Button>
				<Button type="primary" icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
