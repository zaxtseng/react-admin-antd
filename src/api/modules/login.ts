import api from "@/api/index1";
import { PORT1 } from "../config/servicePort";
import { Login } from "../interface";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
	return api.post<Login.ResLogin>(PORT1 + `/login`, params);
};

// * 获取按钮权限
export const getAuthorButtons = () => {
	return api.get<Login.ResAuthButtons>(PORT1 + "/auth/buttons");
};

// * 获取菜单列表
export const getMenuList = () => {
	return api.get<Menu.MenuOptions[]>(PORT1 + "/menu/list");
};
