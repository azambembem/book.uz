import { useNavigate } from "react-router-dom";

const Card = () => {
	const navigate = useNavigate();
	return (
		<div className="w-full h-full">
			<div className="relative">
				<img
					src="https://backend.book.uz/user-api/img/img-file-295d0f4857f96d79e225e2e9edb1bd58.jpg"
					alt="img"
					className="w-full h-full"
				/>
				<div className="w-[52px] h-[52px] rounded-full bg-[#ef7f1a] flex items-center justify-center absolute bottom-3 right-3 cursor-pointer">
					<img src="/icons/bag.svg" alt="bag" className="w-[40px] h-[40px]" />
				</div>
			</div>
			<div className="mt-3">
				<h1
					className="text-xl font-semibold cursor-pointer"
					onClick={() => navigate("/books/1")}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							navigate("/books/1");
						}
					}}
				>
					Dnevnik Anna
				</h1>

				<p className="text-xs">Anna Frank</p>
				<h3 className="text-xl text-[#ef7f1a] font-semibold">100.000</h3>
			</div>
		</div>
	);
};

export default Card;
