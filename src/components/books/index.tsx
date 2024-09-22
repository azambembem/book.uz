import Details from "./customs/details";
import Sidebar from "./customs/sidebar";

const Books = () => {
  return (
    <div className=" w-[90%] m-auto flex gap-6 mt-6">
      <Sidebar />
      <Details />
    </div>
  );
};

export default Books;
