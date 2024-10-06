import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { v4 } from "uuid";
import { useAllCategoriesFeatures } from "./features";
import { useSearchAppParams } from "@/hooks/useRedux/useSearchParams";
// import { useAxios } from "@/hooks/useAxios";
// import { useSearchParams } from "react-router-dom";
// import { useSearchAppParams } from "@/hooks/useRedux/useSearchParams";
// import { Skeleton } from "antd";
// import { useState } from "react"; //

// interface Category {
//   _id: string;
//   name: string;
//   bookCount: number;
//   imgUrl: string;
// }

// const tags = Array.from({ length: 50 }).map(
//   (_, i, a) => `v1.2.0-beta.${a.length - i}`
// ); // data kelayotganligi uchun buni olib tayladik.

const AllCategories = () => {
  // const axios = useAxios();
  const { setParams, getParams } = useSearchAppParams();
  const {
    all_categories: { isLoading, isError, data: all_categories }
  } = useAllCategoriesFeatures();

  const loading = isLoading || isError;

  // const { data, isLoading } = useQuery({
  //   queryKey: ["allCategories"],
  //   queryFn: async () => {
  //     const { data } = await axios({ url: "/genres" });
  //     return data.data;
  //   }
  // });

  //   const [get, set] = useSearchParams();
  // const [selectedCategories, setSelectedCategories] = useState<boolean[]>([]); // type berilmagani uchun pastda qiliz chiqadi.
  // const [selectAll, setSelectAll] = useState(false); //

  //   useEffect(() => {
  //     (async () => {
  //       setLoading(true);
  //       const { data } = await axios({
  //         url: "http://localhost:8080/api/genres",
  //         method: "GET"
  //       });
  //       setLoading(false);
  //       setCategories(data.data);
  //       setSelectedCategories(data.data.map(() => false));
  //     })();
  //   }, []);

  // const handleSelectAll = () => {
  //   setSelectAll(!selectAll);
  //   setSelectedCategories(selectedCategories.map(() => !selectAll));
  // };

  // const handleCategoryChange = (index: number) => {
  //   const updatedSelections = [...selectedCategories];
  //   updatedSelections[index] = !updatedSelections[index];
  //   setSelectedCategories(updatedSelections);
  // };

  // const selectedCategory = getParams("allCategory") ?? "genreIds"; // category bo'lishi ham mumkin

  // const normal_text =
  //   "flex items-center space-x-2 h-[48px] mt-[7px] cursor-pointer";

  // const active_text =
  //   "flex items-center space-x-2 h-[48px] mt-[7px] cursor-pointer";

  // //   const { setParams } = useSearchAppParams();

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
        <div className="flex flex-col gap-2">
          {isLoading
            ? Array.from({ length: 10 }).map(() => (
                <Skeleton className="w-full h-full bg-[#c1c1c1]" key={v4()} />
              ))
            : all_categories?.map((category) => (
                <div key={category._id}>
                  <div className="flex items-center space-x-2 h-[48px]">
                    <Checkbox
                      checked={category._id === getParams("category")}
                      onCheckedChange={() => {
                        console.log("Checked");
                        setParams({ category: category._id });
                      }}
                      id={category._id}
                      name={category._id}
                    />
                    <label
                      htmlFor={category._id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {category.name}
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
