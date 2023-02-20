import { message, Modal } from "antd";
import { Ref, useImperativeHandle, useState } from "react";

interface Props {
	innerRef: Ref<{ showModal: (params: any) => void }>;
}

const PasswordModal = (props: Props) => {
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

	useImperativeHandle(props.innerRef, () => ({ showModal }));
	const showModal = (params: { name: number }) => {
		setIsModalVisible(true);
		console.log(params);
	};

	const handleOk = () => {
		setIsModalVisible(false);
		message.success("修改用户密码成功");
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	return <Modal title="修改密码" open={isModalVisible} onOk={handleOk} onCancel={handleCancel} destroyOnClose={true}></Modal>;
};

export default PasswordModal;
