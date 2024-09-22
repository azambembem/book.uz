import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const AllCategories = () => {
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
      <Input placeholder="Qidirish" type="Search" />
      <ScrollArea className="h-72">
        <div className="p-4">
          <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
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
