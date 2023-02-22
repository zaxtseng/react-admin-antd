import { HOME_URL } from "@/config/config";
import { HomeFilled } from "@ant-design/icons";
import { Tabs } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import "./index.less";

/**
 * 应该是从后台返回的所有的左侧菜单的子项目
 */
const LayoutTabs = () => {
	const tabsList = [
		{
			title: "首页",
			path: HOME_URL
		},
		{
			title: "数据大屏",
			path: "/dataScreen"
		},
		{
			title: "使用 Hooks",
			path: "/table/useHooks"
		},
		{
			title: "使用 Component",
			path: "/table/useComponent"
		},
		{
			title: "数据可视化",
			path: "/dashboard/data/Visualize"
		}
	];

	const { TabPane } = Tabs;
	const { pathname } = useLocation();
	const [activeValue, setActiveValue] = useState(pathname);
	useEffect(() => {
		setActiveValue(pathname);
	}, [pathname]);

	const tabClick = (path: string) => {
		console.log(path);
	};
	const delTabs = (path: string) => {
		console.log(path);
	};

	return (
		<Tabs activeKey={activeValue} onChange={tabClick} hideAdd type="editable-card" onEdit={path => delTabs(path as string)}>
			{tabsList.map(tab => (
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
