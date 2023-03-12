import { getAuthorButtons } from "@/api/modules/login";
import { RootState } from "@/redux";
import { setAuthButtons } from "@/redux/modules/auth/action";
import { updateCollapse } from "@/redux/modules/menu/action";
import { Layout } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import LayoutFooter from "./components/Footer/index";
import LayoutHeader from "./components/Header/index";
import LayoutMenu from "./components/Menu/index";
import LayoutTabs from "./components/Tabs";
import "./index.less";

const { Sider, Content } = Layout;

const LayoutIndex = () => {
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const isCollapse = useSelector((state: RootState) => state.menu.isCollapse);

	const getAuthButtonData = async () => {
		const { data } = await getAuthorButtons();
		dispatch(setAuthButtons(data!));
	};
	const listeningWindow = () => {
		window.onresize = () => {
			return (() => {
				let screenWidth = document.body.clientWidth;
				if (isCollapse === false && screenWidth < 1200) dispatch(updateCollapse(true));
				if (isCollapse === false && screenWidth > 1200) dispatch(updateCollapse(false));
			})();
		};
	};
	useEffect(() => {
		listeningWindow();
		getAuthButtonData();
	}, []);

	return (
		<Layout className="container">
			<Sider trigger={null} collapsible collapsed={isCollapse}>
				<LayoutMenu />
			</Sider>
			<Layout>
				<LayoutHeader />
				<LayoutTabs />
				<Content>
					<Outlet />
				</Content>
				<LayoutFooter />
			</Layout>
		</Layout>
	);
};

export default LayoutIndex;
