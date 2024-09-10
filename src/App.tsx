import { Toaster } from "@/components/ui/sonner";
import BookSection from "./components/books-section";
import Flayer from "./components/flayer";
import MobileApp from "./components/mobile-app";
import Navbar from "./components/navbar";
import News from "./components/news";
import Statistics from "./components/statistics";
import Week from "./components/week";
import MonthTopBooks from "./components/month-top-books/imdex";

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
    </div>
  );
}

export default App;
