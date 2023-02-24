// import { RouteObject } from "react-router-dom";

export interface MetaProps {
	keepAlive?: boolean;
	requiresAuth?: boolean;
	title: string;
	key?: string;
}

// 如何扩展类型,在属性上增加某个值
// export type RouteObject = RouteObject & {
// 	children?: RouteObject[];
// };
