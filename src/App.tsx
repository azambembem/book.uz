import { Toaster } from "@/components/ui/sonner";
import BookSection from "./components/books-section";
import Flayer from "./components/flayer";
import MobileApp from "./components/mobile-app";
import Navbar from "./components/navbar";

function App() {
	return (
		<div>
			<Toaster />
			<Navbar />
			<Flayer />
			<BookSection />
			<MobileApp />
		</div>
	);
}

export default App;
