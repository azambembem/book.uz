import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";

const Header = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-xl font-semibold">Kitoblar</h1>
      <div className="flex gap-2">
        <div className="flex items-center gap-1">
          <p className="text-xs">Ko'rsatish</p>
          <div className="flex gap-1">
            <Toggle className="w-[29px] h-[29px]">9</Toggle>
            <Toggle className="w-[29px] h-[29px]" disabled>
              24
            </Toggle>
            <Toggle disabled className="w-[29xp] h-[29px]">
              36
            </Toggle>
          </div>
        </div>
        <div>
          <Button variant="ghost" className="h-8 w-8">
            <img src="/icons/filter-3.svg" alt="filter-3" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
