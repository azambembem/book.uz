import DeliveryType from "./customs/delivery-type";
import Info from "./customs/Info";
import Izoh from "./customs/izoh";
import Manzil from "./customs/manzil";
import PaymentType from "./customs/payment-type";
import Promokod from "./customs/promokod";
import Sidebar from "./customs/sidebar";

const Orders = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-1 flex flex-col gap-4 mb-10">
        <Info />
        <DeliveryType />
        <Manzil />
        <PaymentType />
        <Promokod />
        <Izoh />
      </div>
      <Sidebar />
    </div>
  );
};

export default Orders;
