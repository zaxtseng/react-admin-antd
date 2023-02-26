import { TabsState } from "@/redux/interface";
import { ADD_TABS, SET_TABS_ACTIVE } from "@/redux/mutation-types";
import { produce } from "immer";
import { AnyAction } from "redux";
import { HOME_URL } from "../../../config/config";

const tabsState: TabsState = {
	tabsActive: HOME_URL,
	tabsList: [
		{
			title: "首页",
			path: HOME_URL
		}
	]
};

const tabs = (state: TabsState = tabsState, action: AnyAction) =>
	produce(state, draft => {
		switch (action.type) {
			case ADD_TABS:
				if (draft.tabsList.every(item => item.path !== action.tabItem.path)) {
					draft.tabsList.push(action.tabItem);
				}
				break;
			case SET_TABS_ACTIVE:
				draft.tabsActive = action.tabsActive;
				break;
			default:
				return draft;
		}
	});
export default tabs;
