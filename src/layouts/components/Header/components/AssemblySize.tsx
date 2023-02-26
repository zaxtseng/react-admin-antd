import { Dropdown, MenuProps, Tooltip } from "antd";

const AssemblySize = () => {
	const menu: MenuProps = {
		items: [
			{
				key: "1",
				label: <span>默认</span>
			},
			{
				key: "2",
				label: <span>大型</span>
			},
			{
				key: "3",
				label: <span>小型</span>
			}
		]
	};

	return (
		<Dropdown menu={menu} placement="bottom" trigger={["click"]} arrow={true}>
			<Tooltip placement="bottom" title="组件大小">
				<i className="icon-style iconfont icon-contentright"></i>
			</Tooltip>
		</Dropdown>
	);
};
export default AssemblySize;
