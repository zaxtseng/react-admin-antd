import { AxiosCanceler } from "@/api/helper/axiosCancel";
import { searchRoute } from "@/utils/util";
import { Navigate, useLocation } from "react-router-dom";
import { rootRouter } from "@/routers";
import { store } from "@/redux";
import { HOME_URL } from "@/config/config";

const axiosCanceler = new AxiosCanceler();

/**
 * @description 路由权限组件
 */

const AuthRouter = (props: any) => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, rootRouter);
	// * 在路由跳转之前, 清除所有请求
	axiosCanceler.removeAllPending();
	// * 判断当前路由是否需要访问权限
	if (!route.meta?.requiresAuth) return props.children;
	// * 判断是否有Token
	const token = store.getState().global.token;
	if (!token) return <Navigate to="/login" replace />;
	// * Dynamic Router(动态路由，根据后端返回的菜单数据生成的一维数组)
	const dynamicRouter = store.getState().auth.authRouter;
	// * Static Router(静态路由，必须配置首页地址，否则不能进首页获取菜单、按钮权限等数据)，获取数据的时候会loading，所有配置首页地址也没问题
	const staticRouter = [HOME_URL, "/403"];
	const routerList = dynamicRouter.concat(staticRouter);
	// * 如果访问的地址没有在路由表中重定向到403页面
	if (routerList.indexOf(pathname) == -1) return <Navigate to="/403" />;

	// * 当前账号有权限返回 Layout 组件，正常访问页面
	// * 当前账号有权限返回 Router，正常访问页面
	return props.children;
};
export default AuthRouter;
