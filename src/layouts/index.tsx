import { Layout } from "antd";
import { Outlet, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./index.less";

const { Sider, Content } = Layout;

const LayoutIndex = ({ name }: { name: string }) => {
	const { pathname } = useLocation();

	return (
		<Layout>
			<Sider trigger={null} collapsible collapsed={false}></Sider>
			<Content>
				<TransitionGroup>
					<CSSTransition key={pathname} timeout={200} classNames="fade" exit={false}>
						<Outlet />
					</CSSTransition>
				</TransitionGroup>
			</Content>
		</Layout>
	);
};

export default LayoutIndex;
