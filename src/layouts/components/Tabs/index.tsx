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
			path: "/home"
		},
		{
			title: "超级表格",
			path: "/proTable"
		},
		{
			title: "数据大屏",
			path: "/dataScreen"
		},
		{
			title: "使用 Hooks",
			path: "/useHooks"
		},
		{
			title: "使用 Component",
			path: "/useComponent"
		},
		{
			title: "数据可视化",
			path: "/dashboard"
		},
		{
			title: "内嵌页面",
			path: "/embedded"
		},
		{
			title: "基础 Form",
			path: "/basicForm"
		},
		{
			title: "校验 Form",
			path: "/validateForm"
		},
		{
			title: "动态 Form",
			path: "/dynamicForm"
		},
		{
			title: "水型图",
			path: "/waterChart"
		},
		{
			title: "柱状图",
			path: "/columnChart"
		},
		{
			title: "折线图",
			path: "/超级表格"
		},
		{
			title: "雷达图",
			path: "/radarChart"
		},
		{
			title: "嵌套环形图",
			path: "/nestedChart"
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
					closable={tab.path !== "/home"}
					tab={
						<span>
							{tab.path === "/home" ? <HomeFilled /> : ""}
							{tab.title}
						</span>
					}
				></TabPane>
			))}
		</Tabs>
	);
};

export default LayoutTabs;
