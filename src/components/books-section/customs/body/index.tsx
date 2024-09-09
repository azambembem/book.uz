import Card, { PlacholderCard } from "./customs/card";

const Body = () => {
	return (
		<div className="grid grid-cols-6 grid-rows-2 mt-8">
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<PlacholderCard />
		</div>
	);
};

export default Body;
