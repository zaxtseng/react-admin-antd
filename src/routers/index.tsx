import Login from '@/views/login';
import { Navigate, RouteObject, useRoutes } from 'react-router-dom';

const rootRouter: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to="/login" />
	},
	{
		path: '/login',
		element: <Login />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
