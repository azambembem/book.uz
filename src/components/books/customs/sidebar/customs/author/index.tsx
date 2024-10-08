import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { v4 } from "uuid";
import { useSearchAppParams } from "@/hooks/useRedux/useSearchParams";
import { useAllAuthorFeatures } from "./features";

const AllAuthor = () => {
  const { setParams, getParams } = useSearchAppParams();
  const {
    all_authors: { isLoading, isError, data: all_authors }
  } = useAllAuthorFeatures();

  const loading = isLoading || isError;

  return (
    <div className="p-4 bg-[#f6f6f6]">
      <div className="flex items-center space-x-2 h-[52px]">
        <Checkbox
          onCheckedChange={() => setParams({ author: "all-author" })}
          id="all-author"
          checked={getParams("author") === "all-author"}
        />
        <label
          htmlFor="all-author"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Barcha mualliflar
        </label>
      </div>
      <Input
        onChange={(e) => setParams({ "author-search": e.target.value })}
        placeholder="Qidirish"
        type="Search"
      />
      <ScrollArea className="h-72 rounded-md">
        <div className="flex flex-col gap-2">
          {loading
            ? Array.from({ length: 10 }).map(() => (
                <Skeleton className="w-full h-10 bg-[#c1c1c1]" key={v4()} />
              ))
            : all_authors?.map((author) => (
                <div
                  key={author._id}
                  className="flex items-center space-x-2 h-[48px]"
                >
                  <Checkbox
                    checked={author._id === getParams("author")}
                    onCheckedChange={() => setParams({ author: author._id })}
                    id={author._id}
                    name={author._id}
                  />
                  <label
                    htmlFor={author._id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {author.fullName}
                  </label>
                </div>
              ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default AllAuthor;
