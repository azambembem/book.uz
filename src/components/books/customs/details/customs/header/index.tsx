import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Toggle } from "@/components/ui/toggle";
import { useSearchAppParams } from "@/hooks/useRedux/useSearchParams";

const Header = () => {
	const { setParams } = useSearchAppParams();
	return (
		<div className="flex justify-between">
			<h1 className="text-xl font-semibold">Kitoblar</h1>
			<div className="flex gap-2">
				<div className="flex items-center gap-1">
					<p className="text-xs">Ko'rsatish</p>
					<div className="flex gap-1">
						<Toggle
							onClick={() => setParams({ count: "9" })}
							className="w-[29px] h-[29px]"
						>
							9
						</Toggle>
						<Toggle
							onClick={() => setParams({ count: "24" })}
							className="w-[29px] h-[29px]"
						>
							24
						</Toggle>
						<Toggle
							onClick={() => setParams({ count: "36" })}
							className="w-[29xp] h-[29px]"
						>
							36
						</Toggle>
					</div>
				</div>
				<div className="flex items-center gap-1">
					<img
						onClick={() => setParams({ cols: "3" })}
						onKeyUp={(event) => {
							if (event.key === "Enter" || event.key === " ") {
								setParams({ cols: "3" });
							}
						}}
						src="/icons/filter-3.svg"
						alt="filter-3"
						className="w-8 h-8 cursor-pointer"
					/>

					<img
						onClick={() => setParams({ cols: "4" })} // git commit qilishda error bergani uchun 3ta img hammasi tuzatilgan. asl code bn farqi bor!
						onKeyUp={(event) => {
							if (event.key === "Enter" || event.key === " ") {
								setParams({ cols: "4" });
							}
						}}
						src="/icons/filter-4.svg"
						alt="filter-4"
						className="w-8 h-8 cursor-pointer"
					/>

					<img
						onClick={() => setParams({ cols: "6" })}
						onKeyUp={(event) => {
							if (event.key === "Enter" || event.key === " ") {
								setParams({ cols: "6" });
							}
						}}
						src="/icons/filter-5.svg"
						alt="filter-5"
						className="w-8 h-8 cursor-pointer"
					/>
				</div>
				<Select
					onValueChange={(e) => {
						setParams({ sort: e });
					}}
				>
					<SelectTrigger className="w-[180px]">
						<SelectValue placeholder="Saralash" />
					</SelectTrigger>
					<SelectContent>
						<SelectGroup>
							<SelectLabel>Saralash</SelectLabel>
							<SelectItem value="yangi kitoblar">Yangi kitoblar</SelectItem>
							<SelectItem value="arzonroq">Arzonroq</SelectItem>
							<SelectItem value="qimmatroq">Qimmatroq</SelectItem>
							<SelectItem value="reytingi-yuqori">Reytingi yuqori</SelectItem>
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default Header;
