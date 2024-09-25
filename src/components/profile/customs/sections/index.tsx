import { Outlet } from "react-router-dom";
// import Dashboard from "./dashboard";
// import MeningBuyurtmalarim from "./mening-buyurtmalarim";
// import Sozlamalar from "./sozlamalar";

const Sections = () => {
  return (
    <div className="w-full">
      {/* <Dashboard /> */}
      <Outlet />
      {/* <MeningBuyurtmalarim /> */}
      {/* <Sozlamalar /> */}
    </div>
  );
};

export default Sections;
