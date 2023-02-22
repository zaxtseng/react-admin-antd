import { Layout } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import LayoutFooter from "./components/Footer/index";
import LayoutHeader from "./components/Header/index";
import LayoutMenu from "./components/Menu/index";
import LayoutTabs from "./components/Tabs";
import "./index.less";

const { Sider, Content } = Layout;

const LayoutIndex = ({ name }: { name: string }) => {
	const { pathname } = useLocation();

	return (
		<Layout className="container">
			<Sider trigger={null} collapsible collapsed={false}>
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
