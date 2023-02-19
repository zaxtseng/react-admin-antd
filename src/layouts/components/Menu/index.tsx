import {
	AppstoreOutlined,
	AreaChartOutlined,
	FileTextOutlined,
	FundOutlined,
	HomeOutlined,
	PieChartOutlined,
	ShoppingOutlined
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./components/Logo";
import "./index.less";

// type MenuItem = Required<MenuProps>["items"][number];

const LayoutMenu = () => {
	const { pathname } = useLocation();
	const [menuActive, setMenuActive] = useState<string>("");
	const [subMenuActive, setSubMenuActive] = useState<string>("");

	const [menuList] = useState([
		{
			label: "首页",
			key: "/home",
			icon: <HomeOutlined />
		},
		{
			label: "数据大屏",
			key: "/dataScreen",
			icon: <AreaChartOutlined />
		},
		{
			title: "表格",
			key: "/table",
			children: [
				{
					label: "使用Hooks",
					key: "/table/useHooks",
					icon: <AppstoreOutlined />
				},
				{
					label: "使用 Component",
					key: "/table/useComponent",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "Dashboard",
			key: "/dashboard",
			icon: <FundOutlined />,
			children: [
				{
					key: "/dashboard/dataVisualize",
					label: "数据可视化",
					icon: <AppstoreOutlined />
				},
				{
					key: "/dashboard/embedded",
					label: "内嵌页面",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "表单 Form",
			key: "/form",
			icon: <FileTextOutlined />,
			children: [
				{
					key: "/form/basicForm",
					label: "基础 Form",
					icon: <AppstoreOutlined />
				},
				{
					key: "/form/validateForm",
					label: "校验 Form",
					icon: <AppstoreOutlined />
				},
				{
					key: "/form/dynamicForm",
					label: "动态 Form",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "Echarts",
			key: "/echarts",
			icon: <PieChartOutlined />,
			children: [
				{
					key: "/echarts/waterChart",
					label: "水型图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/columnChart",
					label: "柱状图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/lineChart",
					label: "折线图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/pieChart",
					label: "饼图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/radarChart",
					label: "雷达图",
					icon: <AppstoreOutlined />
				},
				{
					key: "/echarts/nestedChart",
					label: "嵌套环形图",
					icon: <AppstoreOutlined />
				}
			]
		},
		{
			label: "常用组件",
			key: "/assembly",
			icon: <ShoppingOutlined />,
			children: [
				{
					key: "/assembly/selectIcon",
					label: "Icon 选择",
					icon: <AppstoreOutlined />
				},
				{
					key: "/assembly/batchImport",
					label: "批量导入数据",
					icon: <AppstoreOutlined />
				}
			]
		}
	]);
	const getSubMenuActive = () => {
		menuList.map((item: any) => {
			if (item.children) {
				item.children.map((child: any) => {
					if (child.key === pathname) {
						setSubMenuActive(item?.key);
					}
				});
			}
		});
	};
	const navigate = useNavigate();
	// 点击当前菜单
	const clickMenu: MenuProps["onClick"] = e => {
		navigate(e.key);
	};
	// 当前展开的 subMenu
	const openSubMenu = (openKeys: any) => {
		if (openKeys.length === 0) return setSubMenuActive("");
		setSubMenuActive(openKeys[1]);
	};
	useEffect(() => {
		getSubMenuActive();
		setMenuActive(pathname);
	}, [pathname]);

	return (
		<div className="menu">
			<Logo />
			<Menu
				theme="dark"
				mode="inline"
				triggerSubMenuAction="click"
				selectedKeys={[menuActive]}
				items={menuList}
				openKeys={[subMenuActive]}
				onClick={clickMenu}
				onOpenChange={openSubMenu}
			></Menu>
		</div>
	);
};

export default LayoutMenu;
