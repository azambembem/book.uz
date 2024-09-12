import {
	DialogDescription,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setSignIn } from "@/redux/slices/auth";

const SignIn = () => {
	const dispatch = useReduxDispatch();
	const {
		sign_in: { number },
	} = useReduxSelector(({ auth }) => auth);

	return (
		<div>
			<DialogHeader>
				<DialogTitle>Kirish</DialogTitle>
				<DialogDescription>
					Telefon raqamingizni kiriting va biz sizga bir martalik SMS-kod
					yuboramiz
				</DialogDescription>
			</DialogHeader>
			<div className="grid gap-4 py-4">
				<div className="flex flex-col gap-2 items-start">
					<Label htmlFor="name" className="text-right">
						Telefon Raqam:
					</Label>
					<Input
						value={number}
						onChange={(e) => dispatch(setSignIn({ number: e.target.value }))}
						id="name"
						type="number"
						placeholder="+998 77 777 15 65"
						className="col-span-3"
					/>
				</div>
			</div>
		</div>
	);
};

export default SignIn;
