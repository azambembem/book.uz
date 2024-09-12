import { createSlice } from "@reduxjs/toolkit";

type State = "loading" | "error" | null;

type InitialState = {
	sign_in: {
		number: string;
		state: State;
	};
	sign_up: {
		name: string;
		surname: string;
		number: string;
		state: State;
	};
	otp: {
		verification: string;
		state: State;
	};
};

const initialState: InitialState = {
	sign_in: {
		number: "",
		state: null,
	},
	sign_up: {
		name: "",
		surname: "",
		number: "",
		state: null,
	},
	otp: {
		verification: "",
		state: null,
	},
};

const auth = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setSignIn(
			state,
			{ payload }: { payload: Partial<InitialState["sign_in"]> },
		) {
			state.sign_in = { ...state.sign_in, ...payload };
		},
		setSignUp(
			state,
			{ payload }: { payload: Partial<InitialState["sign_up"]> },
		) {
			state.sign_up = { ...state.sign_up, ...payload };
		},
		setOtp(state, { payload }: { payload: Partial<InitialState["otp"]> }) {
			state.otp = { ...state.otp, ...payload };
		},
	},
});

export default auth.reducer;
export const { setOtp, setSignIn, setSignUp } = auth.actions;
