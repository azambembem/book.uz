import Details from "./customs/details";
import Header from "./customs/header";

const Checkout = () => {
  return (
    <div className="w-[90%] m-auto flex flex-col gap-4">
      <Header />
      <Details />
    </div>
  );
};

export default Checkout;
