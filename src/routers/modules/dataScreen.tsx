import React from "react";
import { LayoutIndex } from "../constant";
import { RouteObject } from "../interface";
import lazyLoad from "../lazyLoad";

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
