import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: {
		isAuth: false,
		userName: "",
		uuid: "",
		isModerator: false,
		toggle: false,
	},
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		logout: (state, action) => {
			return initialState;
		},

		login: (state, action) => {
			return {
				value: {
					...state.value,
					isAuth: true,
					userName: action.payload,
					uuid: "1234567890",
					isModerator: false,
				},
			};
		},
		toggle: (state, action) => {
			return {
				value: {
					...state.value,
					toggle: !state.value.toggle,
				},
			};
		},
	},
});

export const { logout, login, toggle } = authSlice.actions;
export default authSlice.reducer;
