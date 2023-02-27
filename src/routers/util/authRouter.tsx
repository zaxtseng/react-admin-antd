import { AxiosCanceler } from "@/api/helper/axiosCancel";
import { searchRoute } from "@/utils/util";
import { useLocation } from "react-router-dom";
import { rootRouter } from "..";

const axiosCanceler = new AxiosCanceler();

/**
 * @description 路由权限组件
 */

const AuthRouter = (prop: any) => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, rootRouter);
	// * 在路由跳转之前, 清除所有请求
	axiosCanceler.removeAllPending();
	// * 判断当前路由是否需要访问权限
	if (!route.meta?.requiresAuth) return prop.children;
};
export default AuthRouter;
