import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

const Author = () => {
  return (
    <div className="p-4 bg-[#f6f6f6]">
      <div className="flex items-center space-x-2 h-[52px]">
        <Checkbox id="all-author" />
        <label
          htmlFor="all-author"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Barcha Mualliflar
        </label>
      </div>
      <Input placeholder="Qidirish" type="Search" />
      <ScrollArea className="h-72">
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

export default Author;
