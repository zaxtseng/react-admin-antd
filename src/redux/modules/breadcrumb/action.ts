import { SET_BREADCRUMB_LIST } from "@/redux/mutation-types";

export const setBreadcrumbList = (payload: { [key: string]: any }) => ({
	type: SET_BREADCRUMB_LIST,
	payload
});
