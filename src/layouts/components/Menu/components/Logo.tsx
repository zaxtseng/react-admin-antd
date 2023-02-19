import logo from "@/assets/icons/logo.svg";
type Props = {};

const Logo = (props: Props) => {
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			<h2 className="logo-text">React Admin Antd</h2>
		</div>
	);
};

export default Logo;
