import { RootState } from "@/redux";
import { setWeakOrGray } from "@/redux/modules/global/action";
import { FireOutlined } from "@ant-design/icons";
import { Divider, Drawer, message, Switch } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Theme = () => {
	const dispatch = useDispatch();
	const { weakOrGray } = useSelector((state: RootState) => state.global.themeConfig);

	const [open, setOpen] = useState<boolean>(false);

	const showDrawer = () => {
		setOpen(true);
	};
	const onClose = () => {
		setOpen(false);
	};

	const onChange = (checked: boolean, theme: string) => {
		if (checked) return dispatch(setWeakOrGray(theme));
		dispatch(setWeakOrGray(""));
	};

	return (
		<>
			<i
				className="icon-style iconfont icon-zhuti"
				onClick={() => {
					showDrawer();
				}}
			/>
			<Drawer title="主题设置" closable={false} onClose={onClose} open={open} width={320}>
				<Divider className="divider">
					<FireOutlined />
					全局主题
				</Divider>
				<div className="theme-item">
					<span>暗黑模式（未完成）</span>
					<Switch
						checkedChildren={<>🌞</>}
						unCheckedChildren={<>🌜</>}
						onChange={() => {
							message.success("欢迎提交 pull request ✨");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>灰色模式</span>
					<Switch
						checked={weakOrGray === "gray"}
						onChange={e => {
							onChange(e, "gray");
						}}
					/>
				</div>
				<div className="theme-item">
					<span>色弱模式</span>
					<Switch
						checked={weakOrGray === "weak"}
						onChange={e => {
							onChange(e, "weak");
						}}
					/>
				</div>
			</Drawer>
		</>
	);
};
export default Theme;
