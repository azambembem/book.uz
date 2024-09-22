import AllCategories from "./customs/all-categories";
import Price from "./customs/price";

const Sidebar = () => {
  return (
    <div className="min-w-[288px] max-w-[288px] h-fit flex flex-col gap-6">
      <AllCategories />
      <Price />
    </div>
  );
};

export default Sidebar;
