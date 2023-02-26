import logo from "@/assets/icons/logo.svg";
import { RootState } from "@/redux";
import { useSelector } from "react-redux";

const Logo = () => {
	// const isCollapse = useSelector((state: RootState) => state.menu.isCollapse);
	const isCollapse = useSelector<RootState, any>(state => state.menu.isCollapse);
	return (
		<div className="logo-box">
			<img src={logo} alt="logo" className="logo-img" />
			{isCollapse ? <h2 className="logo-text">React Admin Antd</h2> : null}
		</div>
	);
};

export default Logo;
