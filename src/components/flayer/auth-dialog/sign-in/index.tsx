import { DialogHeader } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";

const SignIn = () => {
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
