import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useSearchAppParams } from "@/hooks/useRedux/useSearchParams";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const AllCategories = () => {
  const { setParams } = useSearchAppParams();
  return (
    <div className="p-4 bg-[#f6f6f6]">
      <div className="flex items-center space-x-2 h-[52px]">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          All Categories
        </label>
      </div>
      <Input
        onChange={(e) => setParams({ "category-search": e.target.value })}
        placeholder="Qidirish"
        type="Search"
      />
      <ScrollArea className="h-72 rounded-md">
        <div>
          {tags.map((tag) => (
            <div key={tag}>
              <div className="flex items-center space-x-2 h-[48px]">
                <Checkbox id={tag} />
                <label
                  htmlFor={tag}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Badiiy Adabiyot
                </label>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default AllCategories;
