import logo from "@/assets/icons/react.svg";

const Logo = ({ isCollapse }: { isCollapse: boolean }) => {
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			{!isCollapse ? <h2 className="logo-text">React Admin</h2> : null}
		</div>
	);
};

export default Logo;
