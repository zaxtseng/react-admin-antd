import produce from "immer";
import { AnyAction } from "redux";

import * as types from "@/redux/mutation-types";
import { MenuState } from "@/redux/interface";

const menuState: MenuState = {
	isCollapse: false,
	menuList: []
};

// 创建menu-reducer
const menu = (state: MenuState = menuState, action: AnyAction) =>
	produce(state, draft => {
		switch (action.type) {
			case types.UPDATE_COLLAPSE:
				draft.isCollapse = !draft.isCollapse;
				break;
			case types.SET_MENU_LIST:
				draft.menuList = action.menuList;
				break;
			default:
				return draft;
		}
	});

export default menu;
