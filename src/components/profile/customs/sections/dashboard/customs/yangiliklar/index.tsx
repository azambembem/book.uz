import Card from "./card";

const Yangiliklar = () => {
	return (
		<div>
			<h1 className="text-xl font-semibold">Yangiliklar</h1>
			<div className="flex gap-4 mt-4">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};

export default Yangiliklar;
