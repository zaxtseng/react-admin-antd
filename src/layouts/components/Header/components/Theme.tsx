import { Drawer, Tooltip } from "antd";
import { useState } from "react";

const Theme = () => {
	const [open, setOpen] = useState<boolean>(false);
	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};
	return (
		<>
			<Tooltip placement="bottom" title="主题">
				<i
					className="icon-style iconfont icon-zhuti"
					onClick={() => {
						showDrawer();
					}}
				/>
			</Tooltip>
			<Drawer title="主题设置" closable={false} onClose={onClose} open={open}>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Drawer>
		</>
	);
};
export default Theme;
