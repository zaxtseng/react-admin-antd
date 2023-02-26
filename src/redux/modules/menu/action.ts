import { getMenuList } from "@/api/modules/login";
import { SET_MENU_LIST, UPDATE_COLLAPSE } from "@/redux/mutation-types";
import { Dispatch } from "react";

interface MenuProps {
	type: string;
	menuList: Menu.MenuOptions[];
}

export const updateCOllapse = () => ({
	type: UPDATE_COLLAPSE
});

// * thunk
export const getMenuListActionThunk = () => {
	return async (dispatch: Dispatch<MenuProps>) => {
		const { data } = await getMenuList();
		dispatch({
			type: SET_MENU_LIST,
			menuList: data ?? []
		});
	};
};

// * redux- promise
export const getMenuListAction = async (): Promise<MenuProps> => {
	const { data } = await getMenuList();
	return {
		type: SET_MENU_LIST,
		menuList: data ?? []
	};
};
