import React from "react";
import { LayoutIndex } from "../constant";
import { RouteObject } from "../interface";
import lazyLoad from "../util/lazyLoad";

// home模块
const homeRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/home/index",
				element: lazyLoad(React.lazy(() => import("@/views/home"))),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "首页",
					key: "home"
				}
			}
		]
	}
];

export default homeRouter;
