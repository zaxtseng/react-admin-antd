import { BreadcrumbState } from "@/redux/interface";
import { SET_BREADCRUMB_LIST } from "@/redux/mutation-types";
import { produce } from "immer";
import { AnyAction } from "redux";

const breadcrumbState: BreadcrumbState = {
	breadcrumbList: {}
};

const breadcrumb = (state = breadcrumbState, action: AnyAction) =>
	produce(state, draft => {
		switch (action.type) {
			case SET_BREADCRUMB_LIST:
				draft.breadcrumbList = action.breadcrumbList;
				break;
			default:
				return draft;
		}
	});

export default breadcrumb;
