import React from "react";
import { RouteObject } from "react-router-dom";
import { LayoutIndex } from "../constant";
import lazyLoad from "../util/lazyLoad";

const tableRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/proTable/useHooks",
				element: lazyLoad(React.lazy(() => import("@/views/table/useHooks"))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "使用 Hooks",
					key: "useHooks"
				}
			},
			{
				path: "/proTable/useComponent",
				element: lazyLoad(React.lazy(() => import("@/views/table/useComponent"))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "使用 Component",
					key: "useComponent"
				}
			}
		]
	}
];

export default tableRouter;
