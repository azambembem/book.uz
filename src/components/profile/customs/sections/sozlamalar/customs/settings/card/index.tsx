import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPen } from "lucide-react";

const Card = () => {
	return (
		<div className="grid grid-cols-2 gap-x-6 gap-y-4 mt-4">
			<div className="w-[410px]">
				<Label htmlFor="name" className="text-[#828282] text-[14px]">
					Ismingiz
				</Label>
				<div className="relative mt-2">
					<Input
						type="name"
						id="name"
						placeholder="Ismingiz"
						className="text-[16px]"
					/>
					<UserPen className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
				</div>
			</div>
			<div className="w-[410px]">
				<Label htmlFor="surname" className="text-[#828282] text-[14px]">
					Familiyangiz
				</Label>
				<div className="relative mt-2">
					<Input
						type="surname"
						id="surname"
						placeholder="Familiyangiz"
						className="text-[16px]"
					/>
					<UserPen className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
				</div>
			</div>
			<div className="w-[410px]">
				<Label htmlFor="phoneNumber" className="text-[#828282] text-[14px]">
					Telefon raqamingiz
				</Label>
				<div className="relative mt-2">
					<Input
						type="phoneNumber"
						id="phoneNumber"
						placeholder="Telefon raqamingiz"
						className="text-[16px]"
					/>
					<UserPen className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
				</div>
			</div>
			<div className="w-[410px]">
				<Label htmlFor="email" className="text-[#828282] text-[14px]">
					Elektron manzilingiz
				</Label>
				<div className="relative mt-2">
					<Input
						type="email"
						id="email"
						placeholder="Elektron manzilingiz"
						className="text-[16px]"
					/>
					<UserPen className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
				</div>
			</div>
			<div className="w-[410px]">
				<Label htmlFor="birthday" className="text-[#828282] text-[14px]">
					Tug’ilgan kuningiz
				</Label>
				<div className="relative mt-2">
					<Input
						type="birthday"
						id="birthday"
						placeholder="Tug’ilgan kuningiz"
						className="text-[16px]"
					/>
					<UserPen className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
				</div>
			</div>
			<div className="w-[410px]">
				<Label htmlFor="lorem" className="text-[#828282] text-[14px]">
					Bio
				</Label>
				<div className="relative mt-2">
					<Input
						type="lorem"
						id="lorem"
						placeholder="Bio"
						className="text-[16px]"
					/>
					<UserPen className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
				</div>
			</div>
		</div>
	);
};

export default Card;
