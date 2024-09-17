import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useReduxDispatch, useReduxSelector } from "@/hooks/useRedux";
import { setSignUp } from "@/redux/slices/auth";

const SignUp = () => {
	const dispatch = useReduxDispatch();
	const { sign_up } = useReduxSelector(({ auth }) => auth);

	return (
		<div>
			<DialogHeader>
				<DialogTitle>Ro'yxatdan o'tish</DialogTitle>
			</DialogHeader>
			<div className="grid gap-4 py-4">
				<div className="flex flex-col gap-2 items-start">
					<Label htmlFor="name" className="text-right">
						Ismingiz:
					</Label>
					<Input
						value={sign_up.name}
						onChange={(e) => dispatch(setSignUp({ name: e.target.value }))}
						id="name"
						placeholder="User"
						className="col-span-3"
					/>
				</div>
				<div className="flex flex-col gap-2 items-start">
					<Label htmlFor="name" className="text-right">
						Familiyangiz:
					</Label>
					<Input
						value={sign_up.surname}
						onChange={(e) => dispatch(setSignUp({ surname: e.target.value }))}
						id="surname"
						placeholder="Userov"
						className="col-span-3"
					/>
				</div>
				<div className="flex flex-col gap-2 items-start">
					<Label htmlFor="name" className="text-right">
						Telefon Raqamingiz:
					</Label>
					<Input
						value={sign_up.number}
						onChange={(e) => dispatch(setSignUp({ number: e.target.value }))}
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

export default SignUp;
