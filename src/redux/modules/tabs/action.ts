import { ADD_TABS, SET_TABS_ACTIVE } from "@/redux/mutation-types";

// * addTabs
export const addTabs = (tabItem: Menu.MenuOptions) => ({
	type: ADD_TABS,
	tabItem
});

// * setTabsActive
export const setTabsActive = (tabsActive: string) => ({
	type: SET_TABS_ACTIVE,
	tabsActive
});
