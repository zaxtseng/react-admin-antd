import { SET_BREADCRUMB_LIST } from "@/redux/mutation-types";

export const setBreadcrumbList = (breadcrumbList: { [key: string]: any }) => ({
	type: SET_BREADCRUMB_LIST,
	breadcrumbList
});
