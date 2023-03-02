import { GlobalState } from "@/redux/interface";
import { SET_ASSEMBLY_SIZE, SET_DARK, SET_LANGUAGE, SET_TOKEN, SET_WEAK_OR_GRAY } from "@/redux/mutation-types";
import { produce } from "immer";
import { AnyAction } from "redux";

const globalState: GlobalState = {
	token: "",
	userInfo: "",
	assemblySize: "middle",
	language: "",
	themeConfig: {
		primary: "#1890ff",
		isDark: false,
		weakOrGray: ""
	}
};

const global = (state: GlobalState = globalState, action: AnyAction) =>
	produce(state, draft => {
		switch (action.type) {
			case SET_TOKEN:
				draft.token = action.token;
				break;
			case SET_ASSEMBLY_SIZE:
				draft.assemblySize = action.assemblySize;
				break;
			case SET_LANGUAGE:
				draft.language = action.language;
				break;
			case SET_DARK:
				draft.themeConfig.isDark = action.isDark;
				break;
			case SET_WEAK_OR_GRAY:
				draft.themeConfig.weakOrGray = action.weakOrGray;
				break;
			default:
				return draft;
		}
	});

export default global;
