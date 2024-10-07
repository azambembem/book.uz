// import { Checkbox } from "@/components/ui/checkbox";
// import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";
// // import { useSearchParams } from "react-router-dom";
// import { useSearchAppParams } from "@/hooks/useRedux/useSearchParams";
// import { Skeleton } from "antd";
// import axios from "axios";
// import { useEffect, useState } from "react";

// // const tags = Array.from({ length: 50 }).map(
// //   (_, i, a) => `v1.2.0-beta.${a.length - i}`
// // );
// interface Category {
//   _id: string;
//   fullName: string;
//   bookCount: number;
//   imgUrl: string;
// }

// const Author = () => {
//   const { getParams, setParams } = useSearchAppParams();
//   //   const [get, set] = useSearchParams();
//   const [loading, setLoading] = useState(false);
//   const [categories, setCategories] = useState<Category[]>([]);
//   const [selectedCategories, setSelectedCategories] = useState<boolean[]>([]); // type berilmagani uchun pastda qiliz chiqadi.
//   const [selectAll, setSelectAll] = useState(false);

//   useEffect(() => {
//     (async () => {
//       setLoading(true);
//       const { data } = await axios({
//         url: "http://localhost:8080/api/authors",
//         method: "GET"
//       });
//       console.log(data);
//       setLoading(false);
//       setCategories(data.data);
//       setSelectedCategories(data.data.map(() => false));
//     })();
//   }, []);

//   const handleSelectAll = () => {
//     setSelectAll(!selectAll);
//     setSelectedCategories(selectedCategories.map(() => !selectAll));
//   };

//   const handleCategoryChange = (index: number) => {
//     const updatedSelections = [...selectedCategories];
//     updatedSelections[index] = !updatedSelections[index];
//     setSelectedCategories(updatedSelections);
//   };

//   const selectedCategory = getParams("cols") ?? "category"; // category bo'lishi ham mumkin

//   const normal_text =
//     "flex items-center space-x-2 h-[48px] mt-[7px] cursor-pointer";

//   const active_text =
//     "flex items-center space-x-2 h-[48px] mt-[7px] cursor-pointer";

//   //   const { setParams } = useSearchAppParams();
//   return (
//     <div className="p-4 bg-[#f6f6f6]">
//       <div className="flex items-center space-x-2 h-[52px]">
//         <Checkbox
//           id="terms"
//           checked={selectAll}
//           onCheckedChange={handleSelectAll}
//         />
//         <label
//           htmlFor="terms"
//           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//         >
//           Barcha mualliflar
//         </label>
//       </div>
//       <Input
//         onChange={(e) => setParams({ "category-search": e.target.value })}
//         placeholder="Qidirish"
//         type="Search"
//       />
//       <ScrollArea className="h-72 rounded-md">
//         <div>
//           {loading
//             ? Array.from({ length: 10 }).map((_, idx) => (
//                 <Skeleton.Input block key={`skeleton-${idx}`} />
//               ))
//             : categories.map((category, index) => (
//                 <div
//                   key={category._id} // Use a unique identifier for each category
//                   className={
//                     selectedCategory === category.fullName
//                       ? active_text
//                       : normal_text
//                   }
//                   onClick={() => setParams({ category: category.fullName })}
//                 >
//                   <Checkbox
//                     id={category._id}
//                     checked={selectedCategories[index]}
//                     onCheckedChange={() => handleCategoryChange(index)}
//                   />
//                   <label
//                     htmlFor={category._id}
//                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                   >
//                     {category.fullName}
//                   </label>
//                 </div>
//               ))}
//         </div>
//       </ScrollArea>
//     </div>
//   );
// };

// export default Author;

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
