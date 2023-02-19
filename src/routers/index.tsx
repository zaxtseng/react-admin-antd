import { lazy } from "react";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";
import lazyLoad from "./lazyLoad";

const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		path: "/login",
		element: lazyLoad(lazy(() => import("@/views/login")))
	},
	{
		element: lazyLoad(lazy(() => import("@/layouts"))),
		children: [
			{
				path: "/home",
				element: lazyLoad(lazy(() => import("@/views/home")))
			},
			{
				path: "/dataScreen",
				element: lazyLoad(lazy(() => import("@/views/dataScreen")))
			},
			{
				path: "/proTable/useHooks",
				element: lazyLoad(lazy(() => import("@/views/table/useHooks")))
			},
			{
				path: "/proTable/useComponent",
				element: lazyLoad(lazy(() => import("@/views/table/useComponent")))
			},
			{
				path: "/dashboard/dataVisualize",
				element: lazyLoad(lazy(() => import("@/views/dashboard/dataVisualize")))
			}
		]
	},
	{
		path: "*",
		element: lazyLoad(lazy(() => import("@/components/ErrorMessage/404")))
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
