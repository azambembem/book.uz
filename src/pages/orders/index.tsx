import OrdersComponent from "@/components/orders";
import { Checkout } from "./checkout";
import { Outlet, useOutlet } from "react-router-dom";

const Orders = () => {
  const hasOutlet = useOutlet();
  if (hasOutlet) return <Outlet />;

  return <OrdersComponent />;
};
export { Checkout };
export default Orders;
