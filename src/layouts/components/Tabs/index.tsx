import { HOME_URL } from "@/config/config";
import { HomeFilled } from "@ant-design/icons";
import { message, Tabs } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { RootState } from "@/redux";
import { setTabsList } from "@/redux/modules/tabs/action";
import { routerArray } from "@/routers";
import { searchRoute } from "@/utils/util";
import { useDispatch, useSelector } from "react-redux";
import "./index.less";

/**
 * 应该是从后台返回的所有的左侧菜单的子项目
 */
const LayoutTabs = () => {
	const { tabsList } = useSelector((state: RootState) => state.tabs);

	const { TabPane } = Tabs;
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [activeValue, setActiveValue] = useState(pathname);

	const clickTabs = (path: string) => {
		navigate(path);
	};

	const addTabs = () => {
		const route = searchRoute(pathname, routerArray);
		let newTabsList = JSON.parse(JSON.stringify(tabsList));
		if (tabsList.every((item: { path: any }) => item.path !== route.path)) {
			newTabsList.push({ title: route.meta!.title, path: route.path });
		}
		dispatch(setTabsList(tabsList));
		setActiveValue(pathname);
	};
	useEffect(() => {
		// setActiveValue(pathname);
		addTabs();
	}, [addTabs, pathname]);

	const delTabs = (tabPath: string) => {
		// if (pathname === HOME_URL) return;
		if (tabPath === HOME_URL) return;

		if (tabPath === pathname) {
			tabsList.forEach((item: Menu.MenuOptions, index: number) => {
				if (item.path !== pathname) return;
				const nextTab = tabsList[index + 1] || tabsList[index - 1];
				if (!nextTab) return;
				navigate(nextTab.path);
			});
		}
		message.success("删除tabs标签");
		dispatch(setTabsList(tabsList.filter((item: Menu.MenuOptions) => item.path !== tabPath)));
	};
	return (
		<Tabs activeKey={activeValue} onChange={clickTabs} hideAdd type="editable-card" onEdit={path => delTabs(path as string)}>
			{tabsList.map((tab: Menu.MenuOptions) => (
				<TabPane
					key={tab.path}
					closable={tab.path !== HOME_URL}
					tab={
						<span>
							{tab.path === HOME_URL ? <HomeFilled /> : ""}
							{tab.title}
						</span>
					}
				></TabPane>
			))}
		</Tabs>
	);
};

export default LayoutTabs;
