import Language from "./customs/language";
import AllCategories from "./customs/all-categories";
import Price from "./customs/price";
import Author from "./customs/author";

const Sidebar = () => {
  return (
    <div className="min-w-[288px] max-w-[288px] h-fit flex flex-col gap-6">
      <AllCategories />
      <Price />
      <Language />
      <Author />
    </div>
  );
};

export default Sidebar;
