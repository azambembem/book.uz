import { Checkbox } from "@/components/ui/checkbox";

const Language = () => {
	return (
		<div className="p-4 bg-[#f6f6f6]">
			<div className="flex items-center space-x-2 h-[52px]">
				<Checkbox id="all-languages" />
				<label
					htmlFor="all-languages"
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Barcha tilldagi kitoblar
				</label>
			</div>

			<div className="flex items-center space-x-2 h-[48px]">
				<Checkbox id={"uz"} />
				<label
					htmlFor={"uz"}
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					O'zbekcha
				</label>
			</div>
			<div className="flex items-center space-x-2 h-[48px]">
				<Checkbox id={"ru"} />
				<label
					htmlFor={"ru"}
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Ruscha
				</label>
			</div>
			<div className="flex items-center space-x-2 h-[48px]">
				<Checkbox id={"en"} />
				<label
					htmlFor={"en"}
					className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
				>
					Inglizcha
				</label>
			</div>
		</div>
	);
};

export default Language;
