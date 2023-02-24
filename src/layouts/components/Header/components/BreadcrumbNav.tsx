import { routerArray } from "@/routers";
import { LayoutTitleContext } from "@/routers/constant";
import { searchRoute } from "@/utils/util";
import { Breadcrumb } from "antd";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

const BreadcrumbNav = () => {
	const { pathname } = useLocation();
	const route = searchRoute(pathname, routerArray);
	const props: { title?: string } = useContext(LayoutTitleContext);
	let breadcrumbList: any[] = [];
	if (props!.title) breadcrumbList = [props!.title, route.meta!.title];
	else breadcrumbList = [route.meta!.title];
	console.log("breadcrumbList: ", breadcrumbList);

	return (
		<div>
			<Breadcrumb>
				<Breadcrumb.Item>Home</Breadcrumb.Item>
				<Breadcrumb.Item>List</Breadcrumb.Item>
				<Breadcrumb.Item>App</Breadcrumb.Item>
			</Breadcrumb>
		</div>
	);
};

export default BreadcrumbNav;
