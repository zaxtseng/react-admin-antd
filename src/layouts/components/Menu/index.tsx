import { getMenuList } from "@/api/modules/login";
import { RootState } from "@/redux";
import { setAuthRouter } from "@/redux/modules/auth/action";
import { setBreadcrumbList } from "@/redux/modules/breadcrumb/action";
import { setMenuList as rxSetMenuList } from "@/redux/modules/menu/action";
import { findAllBreadcrumb, getOpenKeys, handleRouter } from "@/utils/util";
import * as Icons from "@ant-design/icons";
import { Menu, MenuProps, Spin } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Logo from "./components/Logo";
import "./index.less";

type MenuItem = Required<MenuProps>["items"][number];

const LayoutMenu = () => {
	const dispatch = useDispatch();

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
			// 存储处理过后的所有面包屑导航栏到redux
			dispatch(setBreadcrumbList(findAllBreadcrumb(res.data!)));
			// 把路由菜单处理成一维数组,存储到redux 中, 做菜单权限判断
			const dynamicRouter = handleRouter(res.data!);
			dispatch(setAuthRouter(dynamicRouter));
			dispatch(rxSetMenuList(res.data!));
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
