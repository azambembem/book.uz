import { Toaster } from "@/components/ui/sonner";
import Navbar from "./components/navbar";
import Home from "./pages/home";

function App() {
	return (
		<div>
			<Toaster />
			<Navbar />
			<Home />
		</div>
	);
}

export default App;
