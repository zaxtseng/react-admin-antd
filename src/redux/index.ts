import { applyMiddleware, compose, legacy_createStore, Store } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reduxPromise from "redux-promise";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

// 开启 redux-devtools
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用中间件
const middleWares = applyMiddleware(thunk, reduxPromise);
// 配合 devtools
const enhancer = composeEnhancers(middleWares);

// redux 持久化配置
const persistConfig = {
	key: "redux-state",
	storage
};
const persistReducerConfig = persistReducer(persistConfig, rootReducer);

// 创建store
const store: Store = legacy_createStore(persistReducerConfig, enhancer);

// 创建持久化store
const persistor = persistStore(store);
export { store, persistor };

// 类型导出
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
