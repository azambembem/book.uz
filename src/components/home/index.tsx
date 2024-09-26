import BookSection from "./customs/books-section";
import Flayer from "./customs/flayer";
// import LastPages from "./customs/last-pages";
import MobileApp from "./customs/mobile-app";
import MonthTopBooks from "./customs/month-top-books/imdex";
import News from "./customs/news";
import Statistics from "./customs/statistics";
import Week from "./customs/week";

const Home = () => {
	return (
		<div>
			<Flayer />
			<BookSection />
			<Week />
			<MonthTopBooks />
			<MobileApp />
			<Statistics />
			<News />
			{/* <LastPages /> */}
		</div>
	);
};

export default Home;
