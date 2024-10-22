// import { useOrderService } from "@/services/order";
import Sidebar from "./customs/sidebar";
import Card from "./customs/card";
import { useOrderService } from "@/services/order";

const Orders = () => {
  const { books } = useOrderService();
  return (
    <div className="flex gap-4">
      <div className="flex-1 flex flex-col gap-4">
        {books.map((book) => (
          <Card {...book} key={book._id} />
        ))}
      </div>
      <Sidebar />
    </div>
  );
};

export default Orders;
