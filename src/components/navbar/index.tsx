import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import {
	Facebook,
	Heart,
	Instagram,
	Languages,
	Search,
	Twitter,
	User,
	WalletCards,
} from "lucide-react";
import { type FC, useState } from "react";
import { Button } from "../ui/button";

import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
	AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { TUser } from "@/types";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import useIsAuthenticated from "react-auth-kit/hooks/useIsAuthenticated";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import AuthDialog from "./auth-dialog";

const Navbar: FC = () => {
	const navigate = useNavigate();
	const isAuthenticated = useIsAuthenticated();
	const auth = useAuthUser<TUser>();
	const [language, setLanguage] = useState("uz");
	return (
		<div className="w-[90%] m-auto">
			<div className="flex justify-between items-center h-[59px]">
				<div className="flex-1 flex gap-4 items-end ">
					<a href="/">
						<img src={"/icons/logo.svg"} alt="logo" />
					</a>
					<h3>Kitob eng yaxshi - sovg'a</h3>
					<Button className="ml-10 pb-0" variant={"link"}>
						Qanday xarid qilinadi?
					</Button>
				</div>
				<div className="flex-1 flex gap-4 items-end justify-end">
					<AlertDialog>
						<AlertDialogTrigger>
							<Button variant={"ghost"}>
								<Search />
							</Button>
						</AlertDialogTrigger>
						<AlertDialogContent>
							<AlertDialogHeader>
								<AlertDialogTitle>Want to search books..?</AlertDialogTitle>
								<AlertDialogDescription>
									<Input type="text" placeholder="Search books.." />
								</AlertDialogDescription>
							</AlertDialogHeader>
							<AlertDialogFooter>
								<AlertDialogCancel>Cancel</AlertDialogCancel>
								<AlertDialogAction>Search</AlertDialogAction>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialog>

					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline">
								<Languages />
							</Button>
						</DropdownMenuTrigger>

						<DropdownMenuContent className="w-56">
							<DropdownMenuLabel>Change Language</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuRadioGroup
								value={language}
								onValueChange={setLanguage}
							>
								<DropdownMenuRadioItem value="en">En</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="uz">Uz</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="right">Ru</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
						</DropdownMenuContent>
					</DropdownMenu>
					<Button className="pb-0" variant={"link"}>
						+998717771565
					</Button>
					<Button variant="outline">
						<Facebook />
					</Button>
					<Button variant="outline">
						<Instagram />
					</Button>
					<Button variant="outline">
						<Twitter />
					</Button>
				</div>
			</div>
			<Separator />
			<div className="flex justify-between items-center mt-2">
				<div className="flex-1 gap-4 items-end">
					<Button variant={"link"} onClick={() => navigate("/books")}>
						Kitoblar
					</Button>
					<Button variant={"link"}>To'plamlar</Button>
					<Button variant={"link"} onClick={() => navigate("/authors")}>
						Mualliflar
					</Button>
					<Button variant={"link"} onClick={() => navigate("/discounts")}>
						Chegirmalar
					</Button>
				</div>
				<div className="flex-1 flex gap-2 items-center justify-end">
					<Button
						onClick={() =>
							toast("Event has been created", {
								description: new Date().toLocaleString(),
								action: {
									label: "Undo",
									onClick: () => console.log("Undo"),
								},
							})
						}
						className="flex gap-2"
						variant="outline"
					>
						<WalletCards /> Savatcha
					</Button>
					<Button
						onClick={() =>
							toast("Event has been created", {
								description: new Date().toLocaleString(),
								action: {
									label: "Undo",
									onClick: () => console.log("Undo"),
								},
							})
						}
						className="flex gap-2"
						variant="outline"
					>
						<Heart /> Sevimlilar
					</Button>

					{isAuthenticated ? (
						<Button
							onClick={() => navigate("/profile")}
							className="flex gap-2"
							variant="outline"
						>
							{auth?.name} {auth?.surname}
						</Button>
					) : (
						<Dialog>
							<DialogTrigger asChild>
								<Button className="flex gap-2" variant="outline">
									<User /> Profile
								</Button>
							</DialogTrigger>
							<AuthDialog />
						</Dialog>
					)}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
