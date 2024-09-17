import Body from "./customs/body";
import Header from "./customs/header";

const BookSection = () => {
	return (
		<div className="w-full mt-[80px] bg-[#F0F0F0]">
			<div className="w-[90%] m-auto">
				<Header />
				<Body />
			</div>
		</div>
	);
};

export default BookSection;
