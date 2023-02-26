import avatar from "@/assets/images/avatar.png";
import { setToken } from "@/redux/modules/global/action";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, MenuProps, message, Modal } from "antd";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import InfoModal from "./InfoModal";
import PasswordModal from "./PasswordModal";

interface ModalProps {
	showModal: (param: { name: number }) => void;
}
const AvatarIcon = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const passRef = useRef<ModalProps>(null);
	const infoRef = useRef<ModalProps>(null!);
	const goHome = () => navigate("/home");

	const logout = () => {
		Modal.confirm({
			title: "温馨提示",
			icon: <ExclamationCircleOutlined />,
			content: "是否确认退出登录?",
			okText: "确认",
			cancelText: "取消",
			onOk: () => {
				dispatch(setToken(""));
				message.success("退出登录成功");
				navigate("/login");
			}
		});
	};

	const items: MenuProps["items"] = [
		{
			label: (
				<span className="dropdown-item" onClick={goHome}>
					首页
				</span>
			),
			key: "1"
		},
		{
			label: (
				<span className="dropdown-item" onClick={() => infoRef.current.showModal({ name: 11 })}>
					个人信息
				</span>
			),
			key: "2"
		},
		{
			label: (
				<span className="dropdown-item" onClick={() => passRef.current!.showModal({ name: 11 })}>
					修改密码
				</span>
			),
			key: "3"
		},
		{
			label: (
				<span className="dropdown-item" onClick={logout}>
					退出登录
				</span>
			),
			key: "4"
		}
	];

	return (
		<>
			<Dropdown menu={{ items }} placement="bottom" arrow trigger={["click"]}>
				<Avatar src={avatar} />
			</Dropdown>
			<InfoModal innerRef={infoRef}></InfoModal>
			<PasswordModal innerRef={passRef} />
		</>
	);
};

export default AvatarIcon;
