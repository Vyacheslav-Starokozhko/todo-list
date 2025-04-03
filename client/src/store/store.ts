import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import rootReducer from "./reducers";
import storage from "redux-persist/lib/storage"; // Uses localStorage by default
import { persistReducer, persistStore } from "redux-persist";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["example"], // Only persist specific reducers
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    devTools: true,
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(
            {
                thunk: false,
                serializableCheck: false, // Redux Persist stores non-serializable data
            }
        ).concat([
            sagaMiddleware
        ]),
});

sagaMiddleware.run(rootSaga);

export type AppStore = ReturnType<typeof store>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
