import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const Price = () => {
	const [price, setPrice] = useState([1, 800000]);
	return (
		<div className="p-4 bg-[#f6f6f6]">
			<div className="flex items-center space-x-2 h-[52px]">
				<h3 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
					Narx
				</h3>
			</div>
			<Slider
				onChange={(e) => {
					console.log(e);
				}}
				onRateChange={(e) => {
					console.log(e);
				}}
				onValueChange={setPrice}
				defaultValue={price}
				max={800000}
				min={1}
				step={2}
			/>
			<div className="flex gap-2 mt-2 text-sm">
				Narx: {price[0]} - {price[1]}
			</div>
		</div>
	);
};

export default Price;
