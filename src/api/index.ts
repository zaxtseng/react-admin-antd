import { showFullScreenLoading, tryHideFullScreenLoading } from "@/config/serverLoading";
import { message } from "antd";
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ResultEnum } from "./enum";
import { AxiosCanceler } from "./helper/axiosCancel";
import { checkStatus } from "./helper/checkStatus";
import { ResultData } from "./interface";

const axiosCanceler = new AxiosCanceler();

const config = {
	// 默认地址
	baseURL: import.meta.env.VITE_API_URL as string,
	// 设置超时时间(10s)
	timeout: 10000,
	// 跨域允许携带凭证
	withCredentials: true
};

class Request {
	service: AxiosInstance;
	public constructor(config: AxiosRequestConfig) {
		// 实例化axios
		this.service = axios.create(config);

		/**
		 * @description 请求拦截器
		 * 客户端发送请求 => [请求拦截器] => 服务器
		 * token校验(JWT) : 接收服务器返回的token,存储到redux/本地存储中
		 */

		this.service.interceptors.request.use(
			(config: InternalAxiosRequestConfig) => {
				// NProgress.start();
				// * 将当前请求添加到 pending 中
				axiosCanceler.addPending(config);
				// * 如果当前请求不需要显示 loading, 在 api 服务中通过指定的第三个参数: { headers: { noLoading: true } } 来控制不显示Loading
				config.headers!.noLoading || showFullScreenLoading();
				const token: string = "bqddxxwqmfncffacvbpkuxvwvqrhln";
				config.headers["x-access-token"] = token;
				// return { ...config, headers: { ...config.headers, common: { "x-access-token": token } } };
				return config;
			},
			(error: AxiosError) => {
				console.log("baocuo");

				return Promise.reject(error);
			}
		);

		/**
		 * @description 响应拦截器
		 * 服务器返回信息 => [拦截统一处理] => 客户端获取信息
		 */

		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data, config } = response;
				console.log("响应");

				// NProgress.done();
				// * 在请求结束后, 移除本次请求(关闭 loading)
				axiosCanceler.removePending(config);
				tryHideFullScreenLoading();
				// * 登录失效 ( code === 599 )
				if (data.code == ResultEnum.OVERDUE) {
					message.error(data.msg);
					window.location.href = "/login";

					return Promise.reject(data);
				}
				// * 全局错误信息拦截 (防止下载文件的时候返回数据流, 没有code, 直接报错)
				if (data.code && data.code !== ResultEnum.SUCCESS) {
					message.error(data.msg);
					console.log("错误拦截");

					return Promise.reject(data);
				}

				// * 请求成功
				return data;
			},
			(error: AxiosError) => {
				const { response } = error;
				// NProgress.done();
				tryHideFullScreenLoading();
				// 根据响应的状态码,做不同处理
				if (response) return checkStatus(response.status);
				// 服务端未返回数据 断网处理: 跳转断网页面
				if (!window.navigator.onLine) return window.location.href === "/500";
				console.log("响应失败");

				return Promise.reject(error);
			}
		);
	}

	// * 常用请求方法封装
	get<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.get(url, { params, ..._object });
	}
	post<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.post(url, params, _object);
	}
	put<T>(url: string, params?: object, _object = {}): Promise<ResultData<T>> {
		return this.service.put(url, params, _object);
	}
	delete<T>(url: string, params?: any, _object = {}): Promise<ResultData<T>> {
		return this.service.delete(url, { params, ..._object });
	}
}

export default new Request(config);
