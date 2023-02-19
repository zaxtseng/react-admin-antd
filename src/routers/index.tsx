import NotFound from "@/components/ErrorMessage/404";
import LayoutIndex from "@/layouts";
import DataVisualize from "@/views/dashboard/dataVisualize";
import DataScreen from "@/views/dataScreen";
import Home from "@/views/home";
import Login from "@/views/login";
import UseComponent from "@/views/table/useComponent";
import UseHooks from "@/views/table/useHooks";
import { Navigate, RouteObject, useRoutes } from "react-router-dom";

const rootRouter: RouteObject[] = [
	{
		path: "/",
		element: <Navigate to="/home" />
	},
	{
		path: "/login",
		element: <Login />
	},
	{
		element: <LayoutIndex name="参数" />,
		children: [
			{
				path: "/home",
				element: <Home />
			},
			{
				path: "/dataScreen",
				element: <DataScreen />
			},
			{
				path: "/proTable/useHooks",
				element: <UseHooks />
			},
			{
				path: "/proTable/useComponent",
				element: <UseComponent />
			},
			{
				path: "/dashboard/dataVisualize",
				element: <DataVisualize />
			}
		]
	},
	{
		path: "*",
		element: <NotFound />
	}
];

const Router = () => {
	const routes = useRoutes(rootRouter);
	return routes;
};

export default Router;
