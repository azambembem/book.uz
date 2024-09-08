import Flayer from "./components/flayer";
import Navbar from "./components/navbar";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div>
      <Toaster />
      <Navbar />
      <Flayer />
    </div>
  );
}

export default App;
