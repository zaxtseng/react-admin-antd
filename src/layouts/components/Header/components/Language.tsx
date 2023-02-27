import { RootState } from "@/redux";
import { setLanguage } from "@/redux/modules/global/action";
import { getBrowserLang } from "@/utils/util";
import { Dropdown, MenuProps, Tooltip } from "antd";
import i18n from "i18next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Language = () => {
	const dispatch = useDispatch();
	const { language } = useSelector((state: RootState) => state.global);
	const changeLanguage = (val: string) => {
		dispatch(setLanguage(val));
	};

	useEffect(() => {
		setLanguage(language || getBrowserLang());
		i18n.changeLanguage(language || getBrowserLang());
	}, [language]);

	const menu: MenuProps = {
		items: [
			{
				key: "1",
				label: <span>简体中文</span>,
				onClick: () => changeLanguage("zh"),
				disabled: language === "zh"
			},
			{
				key: "2",
				label: <span>English</span>,
				onClick: () => changeLanguage("en"),
				disabled: language === "en"
			}
		]
	};
	return (
		<Dropdown menu={menu} placement="bottom" trigger={["click"]} arrow={true}>
			<Tooltip placement="bottom" title="语言">
				<i className="icon-style iconfont icon-zhongyingwen" />
			</Tooltip>
		</Dropdown>
	);
};
export default Language;
