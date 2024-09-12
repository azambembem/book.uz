import { Button } from "@/components/ui/button";
import { DialogContent, DialogFooter } from "@/components/ui/dialog";
import { useReduxSelector } from "@/hooks/useRedux";
import { useState } from "react";
import { useAuthDialogFeatures } from "./features";
import Otp from "./opt";
import SignIn from "./sign-in";
import SignUp from "./sign-up";

const AuthDialog = () => {
	const [ui, setUi] = useState<"sign-in" | "sign-up" | "otp">("sign-in");
	const { onSignIn, onSignUp, onOtpVerify } = useAuthDialogFeatures();
	const { sign_in, otp } = useReduxSelector(({ auth }) => auth);

	const onSignHandler = async () => {
		await onSignIn();
		setUi("otp");
	};

	const onSignUpHandler = async () => {
		await onSignUp();
	};
	const onOtpVerifyHandle = async () => {
		await onOtpVerify();
	};

	return (
		<DialogContent className="sm:max-w-[425px]">
			{ui === "sign-in" && <SignIn />}
			{ui === "sign-up" && <SignUp />}
			{ui === "otp" && <Otp />}
			<DialogFooter>
				{ui === "sign-in" && (
					<Button
						disabled={sign_in.state === "loading" || !sign_in.number}
						onClick={onSignHandler}
						type="submit"
					>
						Kirish
					</Button>
				)}
				{ui === "sign-up" && (
					<Button onClick={onSignUpHandler} type="submit">
						Ro'yxatdam o'tish
					</Button>
				)}
				{ui === "otp" && (
					<Button
						disabled={otp.verification.length !== 6 || otp.state === "loading"}
						onClick={onOtpVerifyHandle}
						type="submit"
					>
						Tasdiqlash
					</Button>
				)}
			</DialogFooter>
			{ui === "sign-in" && (
				<div className="flex items-center">
					<h3 className="text-sm">Akkauntingiz yo'qmi?</h3>
					<Button onClick={() => setUi("sign-up")} variant={"link"}>
						Ro'yxatdan o'tish
					</Button>
				</div>
			)}
			{ui === "sign-up" && (
				<div className="flex items-center">
					<h3 className="text-sm">
						Ro'yxatdan o'tkanmisiz?
						<Button onClick={() => setUi("sign-in")} variant={"link"}>
							Kirish
						</Button>
					</h3>
				</div>
			)}
		</DialogContent>
	);
};

export default AuthDialog;
