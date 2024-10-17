import { configureStore } from "@reduxjs/toolkit";
import auth from "./slices/auth";
import order from "./slices/order";


const store = configureStore({
	reducer: {
		auth,
		order
		
	},
});

export default store;
export type RootStore = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
