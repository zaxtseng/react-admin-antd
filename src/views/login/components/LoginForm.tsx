import { Login } from "@/api/interface";
import { CloseCircleOutlined, LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import md5 from "js-md5";
import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../../api/modules/login";

const LoginForm: FC = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [form] = Form.useForm();
	const navigate = useNavigate();
	const onFinish = async (loginForm: Login.ReqLoginForm) => {
		try {
			setLoading(true);
			loginForm.password = md5(loginForm.password);
			await loginApi(loginForm);
			message.success("登录成功");
			navigate("/home");
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log(errorInfo);
	};

	return (
		<Form
			form={form}
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
				<Input.Password autoComplete="new-password" placeholder="密码: 123456" prefix={<LockOutlined />} />
			</Form.Item>
			<Form.Item className="login-btn">
				<Button onClick={() => form.resetFields()} icon={<CloseCircleOutlined />}>
					重置
				</Button>
				<Button type="primary" htmlType="submit" loading={loading} icon={<UserOutlined />}>
					登录
				</Button>
			</Form.Item>
		</Form>
	);
};

export default LoginForm;
