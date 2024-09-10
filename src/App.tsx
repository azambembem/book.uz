import { Toaster } from "@/components/ui/sonner";
import BookSection from "./components/books-section";
import Flayer from "./components/flayer";
import LastPages from "./components/last-pages";
import MobileApp from "./components/mobile-app";
import MonthTopBooks from "./components/month-top-books/imdex";
import Navbar from "./components/navbar";
import News from "./components/news";
import Statistics from "./components/statistics";
import Week from "./components/week";

function App() {
	return (
		<div>
			<Toaster />
			<Navbar />
			<Flayer />
			<BookSection />
			<Week />
			<MonthTopBooks />
			<MobileApp />
			<Statistics />
			<News />
			<LastPages />
		</div>
	);
}

export default App;
