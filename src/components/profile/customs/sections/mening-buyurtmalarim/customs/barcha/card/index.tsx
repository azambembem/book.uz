import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

const Card = () => {
	return (
		<div>
			<div className="w-full h-fit">
				<div className="flex gap-6 mt-4">
					<Toggle className="text-[#EF7F1A] bg-[#EF7F1A33]">Barcha</Toggle>
					<Toggle className="text-[#5E5E5E] bg-[#F6F6F6]">Aktiv</Toggle>
					<Toggle className="text-[#5E5E5E] bg-[#F6F6F6]">Yakunlangan</Toggle>
				</div>

				<div className="flex flex-wrap gap-4 mt-5">
					<div className="bg-[#F6F6F6] rounded-[8px] h-[111px] w-[calc(33.333%_-_1rem)]">
						<h1 className="inline-flex space-x-10 m-4">
							<span className="text-[15px] font-semibold">Buyurtma № 2</span>
							<span>18.12.2022</span>
						</h1>
						<div className="flex items-center ml-4">
							<Button className="text-[#05B001] bg-[#CFFADB] h-[33px]">
								Yetkazilyapti
							</Button>
							<h3 className="ml-6 text-[16px]">84 000 so‘m</h3>
						</div>
					</div>
					<div className="bg-[#F6F6F6] rounded-[8px] h-[111px] w-[calc(33.333%_-_1rem)]">
						<h1 className="inline-flex space-x-10 m-4">
							<span className="text-[15px] font-semibold">Buyurtma № 2</span>
							<span>18.12.2022</span>
						</h1>
						<div className="flex items-center ml-4">
							<Button className="text-[#05B001] bg-[#CFFADB] h-[33px]">
								Yetkazilyapti
							</Button>
							<h3 className="ml-6 text-[16px]">84 000 so‘m</h3>
						</div>
					</div>
					<div className="bg-[#F6F6F6] rounded-[8px] h-[111px] w-[calc(33.333%_-_1rem)]">
						<h1 className="inline-flex space-x-10 m-4">
							<span className="text-[15px] font-semibold">Buyurtma № 2</span>
							<span>18.12.2022</span>
						</h1>
						<div className="flex items-center ml-4">
							<Button className="text-[#05B001] bg-[#CFFADB] h-[33px]">
								Yetkazilyapti
							</Button>
							<h3 className="ml-6 text-[16px]">84 000 so‘m</h3>
						</div>
					</div>
					<div className="bg-[#F6F6F6] rounded-[8px] h-[111px] w-[calc(33.333%_-_1rem)]">
						<h1 className="inline-flex space-x-10 m-4">
							<span className="text-[15px] font-semibold">Buyurtma № 2</span>
							<span>18.12.2022</span>
						</h1>
						<div className="flex items-center ml-4">
							<Button className="text-[#05B001] bg-[#CFFADB] h-[33px]">
								Yetkazilyapti
							</Button>
							<h3 className="ml-6 text-[16px]">84 000 so‘m</h3>
						</div>
					</div>
					<div className="bg-[#F6F6F6] rounded-[8px] h-[111px] w-[calc(33.333%_-_1rem)]">
						<h1 className="inline-flex space-x-10 m-4">
							<span className="text-[15px] font-semibold">Buyurtma № 2</span>
							<span>18.12.2022</span>
						</h1>
						<div className="flex items-center ml-4">
							<Button className="text-[#05B001] bg-[#CFFADB] h-[33px]">
								Yetkazilyapti
							</Button>
							<h3 className="ml-6 text-[16px]">84 000 so‘m</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
