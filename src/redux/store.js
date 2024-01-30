import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/auth-slice.js";
import { productApi } from "./services/productApi.js";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
	reducer: {
		authSlice,
		[productApi.reducerPath]: productApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([productApi.middleware]),
});

// setupListeners(store.dispatch);
