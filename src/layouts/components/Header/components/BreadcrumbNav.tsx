import { RootState } from "@/redux";
import { Breadcrumb } from "antd";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { HOME_URL } from "../../../../config/config";

const BreadcrumbNav = () => {
	const { pathname } = useLocation();
	const { breadcrumbList } = useSelector((state: RootState) => state.breadcrumb);
	const bList = breadcrumbList[pathname] || [];

	return (
		<div>
			<Breadcrumb>
				<Breadcrumb.Item href={`#${HOME_URL}`}>Home</Breadcrumb.Item>
				<Breadcrumb.Item>
					{bList.map((item: string) => {
						return <Breadcrumb.Item key={item}>{item !== "首页" ? item : null}</Breadcrumb.Item>;
					})}
				</Breadcrumb.Item>
			</Breadcrumb>
		</div>
	);
};

export default BreadcrumbNav;
