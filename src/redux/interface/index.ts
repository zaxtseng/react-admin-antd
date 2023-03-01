export interface MenuState {
	isCollapse: boolean;
	menuList: Menu.MenuOptions[];
}
export interface TabsState {
	tabsActive: string;
	tabsList: Menu.MenuOptions[];
}
// * themConfigProps
export interface ThemeConfigProp {
	primary: string;
	isDark: boolean;
	weakOrGray: string;
}

// GlobalState
export interface GlobalState {
	token: string;
	userInfo: any;
	assemblySize: string;
	language: string;
	themeConfig: ThemeConfigProp;
}
/* AuthState */
export interface AuthState {
	authButtons: {
		[propName: string]: any;
	};
	authRouter: string[];
}

export interface BreadcrumbState {
	breadcrumbList: {
		[key: string]: any;
	};
}
