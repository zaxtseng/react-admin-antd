import { Dropdown, MenuProps, Tooltip } from "antd";

const Language = () => {
	const menu: MenuProps = {
		items: [
			{
				key: "1",
				label: <span>简体中文</span>
			},
			{
				key: "2",
				label: <span>English</span>
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
