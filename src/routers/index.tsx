import NotFound from '@/components/ErrorMessage/404';
import LayoutIndex from '@/layouts';
import Home from '@/views/home';
import Login from '@/views/login';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const rootRouter: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to='/home' />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		element: <LayoutIndex name='参数' />,
		children: [
			{
				path: '/home',
				element: <Home />
			}
		]
	},
	{
		path: '*',
		element: <NotFound />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
