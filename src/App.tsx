import { RootState } from "@/redux";
import Router from "@/routers";
import { ConfigProvider, theme } from "antd";
import enUS from "antd/lib/locale/en_US";
import zhCN from "antd/lib/locale/zh_CN";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { getBrowserLang } from "./utils/util";

// const {dark} =  theme;

function App() {
	const [i18nLocale, setI18nLocale] = useState(zhCN);
	const { language, assemblySize } = useSelector((state: RootState) => state.global);

	const setLanguage = () => {
		if (language && language === "zh") return setI18nLocale(zhCN);
		if (language && language === "en") return setI18nLocale(enUS);
		if (getBrowserLang() === "zh") return setI18nLocale(zhCN);
		if (getBrowserLang() === "en") return setI18nLocale(enUS);
	};

	useEffect(() => {
		setLanguage();
	}, []);

	return (
		<div>
			<BrowserRouter>
				<ConfigProvider locale={i18nLocale} componentSize={assemblySize}>
					<Router />
				</ConfigProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
