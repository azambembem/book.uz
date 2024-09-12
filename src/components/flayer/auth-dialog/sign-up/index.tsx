import { DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogTitle } from "@radix-ui/react-dialog";

const SignUp = () => {
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
					<Input id="name" placeholder="User" className="col-span-3" />
				</div>
				<div className="flex flex-col gap-2 items-start">
					<Label htmlFor="name" className="text-right">
						Familiyangiz:
					</Label>
					<Input id="surname" placeholder="Userov" className="col-span-3" />
				</div>
				<div className="flex flex-col gap-2 items-start">
					<Label htmlFor="name" className="text-right">
						Telefon Raqamingiz:
					</Label>
					<Input
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
