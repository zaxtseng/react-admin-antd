import { HOME_URL } from "@/config/config";
import { TabsState } from "@/redux/interface";
import { SET_TABS_ACTIVE } from "@/redux/mutation-types";
import { produce } from "immer";
import { AnyAction } from "redux";

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
			case SET_TABS_ACTIVE:
				draft.tabsActive = action.tabsActive;
				break;
			default:
				return draft;
		}
	});
export default tabs;
