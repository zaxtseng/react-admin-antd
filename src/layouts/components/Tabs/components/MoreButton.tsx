import { HOME_URL } from "@/config/config";
import { RootState } from "@/redux";
import { setTabsList } from "@/redux/modules/tabs/action";
import { DownOutlined } from "@ant-design/icons";
import { Button, Dropdown, MenuProps } from "antd";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

export const MoreButton = (props: any) => {
	const { t } = useTranslation();
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { tabsList } = useSelector((state: RootState) => state.tabs);

	const closeMultipleTab = (tabPath?: string) => {
		const handleTabsList = tabsList.filter((item: Menu.MenuOptions) => {
			return item.path === tabPath || item.path === HOME_URL;
		});
		dispatch(setTabsList(handleTabsList));
		tabPath ?? navigate(HOME_URL);
	};
	const items: MenuProps["items"] = [
		{
			key: "1",
			label: <span>关闭当前</span>,
			onClick: () => {
				dispatch(props.delTabs);
			}
		},
		{
			key: "2",
			label: <span>关闭其它</span>,
			onClick: () => closeMultipleTab(pathname)
		},
		{
			key: "3",
			label: <span>关闭所有</span>,
			onClick: () => closeMultipleTab()
		}
	];
	return (
		<Dropdown menu={{ items }} placement="bottom" arrow={{ pointAtCenter: true }} trigger={["click"]}>
			<Button className="more-button" type="primary" size="small">
				{t("tabs.more")} <DownOutlined />
			</Button>
		</Dropdown>
	);
};
