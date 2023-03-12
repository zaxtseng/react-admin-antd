import React from "react";
import { RouteObject } from "react-router-dom";
import { LayoutIndex } from "../constant";
import lazyLoad from "../util/lazyLoad";

const dataScreenRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/dataScreen",
				element: lazyLoad(React.lazy(() => import("@/views/dataScreen/index"))),
				meta: {
					keepAlive: true,
					requiresAuth: false,
					title: "数据大屏",
					key: "dataScreen"
				}
			}
		]
	}
];

export default dataScreenRouter;
