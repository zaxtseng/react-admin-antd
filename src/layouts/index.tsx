import { getAuthorButtons } from "@/api/modules/login";
import { RootState } from "@/redux";
import { setAuthButtons } from "@/redux/modules/auth/action";
import { Layout } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
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
	return (
		<Layout className="container">
			<Sider trigger={null} collapsible collapsed={isCollapse}>
				<LayoutMenu />
			</Sider>
			<Layout>
				<LayoutHeader />
				<LayoutTabs />
				<Content>
					<TransitionGroup>
						<CSSTransition key={pathname} timeout={200} classNames="fade" exit={false}>
							<Outlet />
						</CSSTransition>
					</TransitionGroup>
				</Content>
				<LayoutFooter />
			</Layout>
		</Layout>
	);
};

export default LayoutIndex;
