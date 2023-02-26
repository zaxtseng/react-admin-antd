import { SET_TABS_ACTIVE, SET_TABS_LIST } from "@/redux/mutation-types";

// * setTabsActive
export const setTabsActive = (tabsActive: string) => ({
	type: SET_TABS_ACTIVE,
	tabsActive
});

// * setTabsList
export const setTabsList = (tabsList: Menu.MenuOptions[]) => ({
	type: SET_TABS_LIST,
	tabsList
});
