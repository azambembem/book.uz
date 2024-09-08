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
import { Facebook, Instagram, Languages, Search, Twitter } from "lucide-react";
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
import { Input } from "../ui/input";

const Navbar: FC = () => {
	const [language, setLanguage] = useState("uz");
	return (
		<div className="w-[90%] m-auto">
			<div className="flex justify-between items-center h-[59px]">
				<div className="flex-1 flex gap-4 items-end ">
					<img src={"/icons/logo.svg"} alt="logo" />
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
		</div>
	);
};

export default Navbar;
