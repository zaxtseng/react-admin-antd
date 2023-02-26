import React from "react";
import { LayoutIndex } from "../constant";
import { RouteObject } from "../interface";
import lazyLoad from "../util/lazyLoad";

const tableRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/table/useHooks",
				element: lazyLoad(React.lazy(() => import("@/views/table/useHooks"))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "使用 Hooks",
					key: "useHooks"
				}
			},
			{
				path: "/table/useComponent",
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
