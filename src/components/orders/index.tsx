import Details from "./customs/details";
import Header from "./customs/header";

const Orders = () => {
  return (
    <div className="w-[90%] m-auto flex-col gap-4">
      <Header />
      <Details />
    </div>
  );
};

export default Orders;
