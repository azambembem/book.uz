import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setOtp, setSignIn, setSignUp } from "@/redux/slices/auth";
import axios from "axios";
import useSignIn from "react-auth-kit/hooks/useSignIn";

type ON_SING_IN = () => Promise<void>;
type ON_SING_UP = () => Promise<void>;
type ON_OTP_VERIFY = () => Promise<void>;

type AuthDialogFeatures = {
	onSignIn: ON_SING_IN;
	onSignUp: ON_SING_UP;
	onOtpVerify: ON_OTP_VERIFY;
};

export const useAuthDialogFeatures = (): AuthDialogFeatures => {
	const { sign_in, otp, sign_up, state } = useReduxSelector(({ auth }) => auth);
	const signIn = useSignIn();

	const dispatch = useReduxDispatch();

	const onSignIn: ON_SING_IN = async () => {
		dispatch(setSignIn({ state: "loading" }));
		await axios({
			url: "https://book-uz-backend.onrender.com/api/auth/sign-in",
			method: "POST",
			data: {
				phoneNumber: `+${sign_in.number}`,
			},
		});
		dispatch(setSignIn({ state: null }));
	};
	const onSignUp: ON_SING_UP = async () => {
		dispatch(setSignUp({ state: "loading" }));
		await axios({
			url: "https://book-uz-backend.onrender.com/api/auth/sign-up",
			method: "POST",
			data: {
				phoneNumber: `+${sign_up.number}`,
				name: sign_up.name,
				surname: sign_up.surname,
			},
		});
		dispatch(setSignUp({ state: null }));
	};
	const onOtpVerify: ON_OTP_VERIFY = async () => {
		dispatch(setOtp({ state: "loading" }));
		const { data } = await axios({
			url: "https://book-uz-backend.onrender.com/api/auth/verify-otp",
			method: "POST",
			data: {
				phoneNumber: `+${state === "sign-in" ? sign_in.number : sign_up.number}`,
				otpCode: Number(otp.verification),
			},
		});
		signIn({
			auth: {
				token: data?.data?.token,
				type: "Bearer",
			},
			userState: data?.data?.user,
		});
		dispatch(setOtp({ state: null }));

		window.location.reload();
	};
	return {
		onSignIn,
		onSignUp,
		onOtpVerify,
	};
};
