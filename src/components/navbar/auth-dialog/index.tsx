import { Button } from "@/components/ui/button";
import { DialogContent, DialogFooter } from "@/components/ui/dialog";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setAuthState } from "@/redux/slices/auth";
import { useAuthDialogFeatures } from "./features";
import Otp from "./opt";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

const AuthDialog = () => {
	// const [ui, setUi] = useState<"sign-in" | "sign-up" | "otp">("sign-in");
	const dispatch = useReduxDispatch();
	const { onSignIn, onSignUp, onOtpVerify } = useAuthDialogFeatures();
	const { sign_in, otp, sign_up, state } = useReduxSelector(({ auth }) => auth);

	const onSignHandler = async () => {
		await onSignIn();
		dispatch(setAuthState("otp"));
	};

	const onSignUpHandler = async () => {
		await onSignUp();
		dispatch(setAuthState("otp"));
	};
	const onOtpVerifyHandle = async () => {
		await onOtpVerify();
	};

	return (
		<DialogContent className="sm:max-w-[425px]">
			{state === "sign-in" && <SignIn />}
			{state === "sign-up" && <SignUp />}
			{state === "otp" && <Otp />}
			<DialogFooter>
				{state === "sign-in" && (
					<Button
						disabled={sign_in.state === "loading" || !sign_in.number}
						onClick={onSignHandler}
						type="submit"
					>
						Kirish
					</Button>
				)}
				{state === "sign-up" && (
					<Button
						disabled={
							!sign_up.name ||
							!sign_up.surname ||
							!sign_up.number ||
							sign_up.state === "loading"
						}
						onClick={onSignUpHandler}
						type="submit"
					>
						Ro'yxatdam o'tish
					</Button>
				)}
				{state === "otp" && (
					<Button
						disabled={otp.verification.length !== 6 || otp.state === "loading"}
						onClick={onOtpVerifyHandle}
						type="submit"
					>
						Tasdiqlash
					</Button>
				)}
			</DialogFooter>
			{state === "sign-in" && (
				<div className="flex items-center">
					<h3 className="text-sm">Akkauntingiz yo'qmi?</h3>
					<Button
						onClick={() => dispatch(setAuthState("sign-up"))}
						variant={"link"}
					>
						Ro'yxatdan o'tish
					</Button>
				</div>
			)}
			{state === "sign-up" && (
				<div className="flex items-center">
					<h3 className="text-sm">
						Ro'yxatdan o'tkanmisiz?
						<Button
							onClick={() => dispatch(setAuthState("sign-in"))}
							variant={"link"}
						>
							Kirish
						</Button>
					</h3>
				</div>
			)}
		</DialogContent>
	);
};

export default AuthDialog;
