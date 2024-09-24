import Dashboard from "./dashboard";
import MeningBuyurtmalarim from "./mening-buyurtmalarim";
// import Sozlamalar from "./sozlamalar";

const Sections = () => {
	return (
		<div className="w-full">
			<Dashboard />
			<MeningBuyurtmalarim />
			{/* <Sozlamalar /> */}
		</div>
	);
};

export default Sections;
