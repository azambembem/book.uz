import Card from "./customs/card";
import Sidebar from "./customs/sidebar";

const Orders = () => {
  return (
    <div className="flex gap-4">
      <div className="flex-1 flex flex-col gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Sidebar />
    </div>
  );
};

export default Orders;
