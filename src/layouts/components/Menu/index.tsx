import { AreaChartOutlined, HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './components/Logo';
import './index.less';

const LayoutMenu = () => {
	const { pathname } = useLocation();
	const [menuActive, setMenuActive] = useState<string>('');

	const menuList = [
		{
			title: '首页',
			path: '/home',
			icon: <HomeOutlined />
		},
		{
			title: '数据大屏',
			path: '/dataScreen',
			icon: <AreaChartOutlined />
		},
		{
			title: '表格',
			path: '/table',
			children: [
				{
					title: '使用Hooks',
					path: '/table/useHooks'
				},
				{
					title: '使用Hooks',
					path: '/table/useHooks'
				}
			]
		}
	];

	useEffect(() => {
		setMenuActive(pathname);
	}, [pathname]);

	return (
		<div className='menu'>
			<Logo />
			<Menu theme='dark' mode='inline' triggerSubMenuAction='click' selectedKeys={[menuActive]}>
				{menuList.map(menu => (
					<Menu.Item key={menu.path} icon={menu.icon}>
						<Link to={menu.path}>{menu.title}</Link>
					</Menu.Item>
				))}
			</Menu>
		</div>
	);
};

export default LayoutMenu;
