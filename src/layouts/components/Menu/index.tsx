import { getMenuList } from "@/api/modules/login";
import { RootState } from "@/redux";
import * as Icons from "@ant-design/icons";
import { Menu, MenuProps, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getOpenKeys } from "../../../utils/util";
import Logo from "./components/Logo";
import "./index.less";

type MenuItem = Required<MenuProps>["items"][number];

const LayoutMenu = () => {
	const { isCollapse } = useSelector((state: RootState) => state.menu);
	const { pathname } = useLocation();
	const [selectedKeys, setSelectedKeys] = useState<string[]>([pathname]);
	const [openKeys, setOpenKeys] = useState<string[]>([]);

	const [menuList, setMenuList] = useState<MenuItem[]>([]);
	const [loading, setLoading] = useState<boolean>(false);

	const getItem = (
		label: React.ReactNode,
		key?: React.Key | null,
		icon?: React.ReactNode,
		children?: MenuItem[],
		type?: "group"
	): MenuItem => {
		return {
			key,
			icon,
			children,
			label,
			type
		} as MenuItem;
	};
	// 获取菜单列表并处理成 antd 需要的格式
	const getMenuData = async () => {
		setLoading(true);
		try {
			const res = await getMenuList();
			res.data && setMenuList(deepLoopFloat(res.data));
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getMenuData();
	}, []);
	// 动态渲染 Icon
	const customIcons: { [key: string]: any } = Icons;
	const addIcon = (name: string) => {
		return React.createElement(customIcons[name]);
	};
	// 处理后台返回菜单 key 值为antd菜单需要的key值
	const deepLoopFloat = (menuList: Menu.MenuOptions[], newArr: MenuItem[] = []) => {
		menuList.forEach((item: Menu.MenuOptions) => {
			if (!item?.children?.length) return newArr.push(getItem(item.title, item.path, addIcon(item.icon!)));

			newArr.push(getItem(item.title, item.path, addIcon(item.icon!), deepLoopFloat(item.children)));
		});
		return newArr;
	};

	const navigate = useNavigate();
	// 点击当前菜单
	const clickMenu: MenuProps["onClick"] = ({ key }: { key: string }) => {
		navigate(key);
	};

	// 设置当前展开的 subMenu
	const onOpenChange = () => {
		if (openKeys.length === 0 || openKeys.length === 1) return setOpenKeys(openKeys);
		const latestOpenKey = openKeys[openKeys.length - 1];
		// 最新展开的 subMenu
		if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys);
		setOpenKeys([latestOpenKey]);
	};
	useEffect(() => {
		// getSubMenuActive();
		// setMenuActive(pathname);
		setSelectedKeys([pathname]);
		isCollapse ? null : setOpenKeys(getOpenKeys(pathname));
	}, [pathname, isCollapse]);

	return (
		<div className="menu">
			<Spin spinning={loading} tip="loading...">
				<Logo />
				<Menu
					theme="dark"
					mode="inline"
					triggerSubMenuAction="click"
					openKeys={openKeys}
					selectedKeys={selectedKeys}
					items={menuList}
					onClick={clickMenu}
					onOpenChange={onOpenChange}
				></Menu>
			</Spin>
		</div>
	);
};

export default LayoutMenu;
