import loginLeft from "@/assets/images/login_left4.png";
import logo from "@/assets/images/logo.png";
import LoginForm from "./components/LoginForm";

import "./index.less";

const Login = () => {
	return (
		<div className="login-container">
			<div className="login-content">
				<div className="login-left">
					<img src={loginLeft} alt="login" />
				</div>
				<div className="login-form">
					<div className="login-logo">
						<img src={logo} alt="logo" />
						<span className="logo-text">React Admin Antd</span>
					</div>
					<LoginForm />
				</div>
			</div>
		</div>
	);
};

export default Login;
