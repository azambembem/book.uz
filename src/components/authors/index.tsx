// import { useEffect, useMemo } from "react";
// import Card from "./customs/card";
// import { useAuthorsFeatures } from "./features";
// import { Button } from "../ui/button";
// import { useInView } from "react-intersection-observer";

// const Authors = () => {
//   const { ref, inView } = useInView();
//   const {
//     authors: { data: authors, fetchNextPage, isLoading, isFetchingNextPage }
//   } = useAuthorsFeatures();

//   const isEmpty = useMemo(() => authors?.pages?.[0], [authors]);
//   const isLastPageEmpty = useMemo(
//     () => authors?.pages?.[authors?.pages.length - 1],
//     [authors]
//   );

//   console.log({
//     isEmpty,
//     isLastPageEmpty,
//     "no-fetch": {
//       loading: !isLoading,
//       fetchNext: !isFetchingNextPage,
//       page: !isLastPageEmpty?.length
//     }
//   });

//   console.log(inView);

//   useEffect(() => {
//     if (inView) fetchNextPage();
//   }, [inView]);

//   return (
//     <div className=" w-[90%] m-auto flex flex-col gap-6 mt-6">
//       <h1 className="text-2xl font-semibold">Mualliflar</h1>
//       <Button
//         onClick={() => {
//           fetchNextPage();
//         }}
//       >
//         Fetch Next Page
//       </Button>

//       <div className="grid grid-cols-3 gap-4 mb-[100px]">
//         {authors?.pages.map((page) => page.map(() => <Card />))}
//       </div>

//       {(isLoading || isFetchingNextPage) && <div>Loading...</div>}
//       {!isLoading && !isFetchingNextPage && isLastPageEmpty?.length ? (
//         <div ref={ref}>hello I'm here bro ~~, for fetching next page...</div>
//       ) : (
//         ""
//       )}
//       {!isLoading && !isFetchingNextPage && isEmpty?.length && (
//         <div>No Authors Found.</div>
//       )}
//       {!isLoading && !isFetchingNextPage && !isLastPageEmpty?.length && (
//         <div>There's no author to fetch...</div>
//       )}
//     </div>
//   );
// };

// export default Authors;

import { useEffect, useMemo } from "react";
import { useAuthorsFeatures } from "./features";
import { Button } from "../ui/button";
import { useInView } from "react-intersection-observer";
import Card from "./customs/card";

const Authors = () => {
  const { ref, inView } = useInView();
  const {
    authors: { data: authors, fetchNextPage, isLoading, isFetchingNextPage }
  } = useAuthorsFeatures();

  const isEmpty = useMemo(() => authors?.pages?.[0], [authors]);
  const isLastPageEmpty = useMemo(
    () => authors?.pages?.[authors?.pages.length - 1],
    [authors]
  );

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  return (
    <div className="w-[90%] m-auto flex flex-col gap-6 mt-6">
      <h1 className="text-2xl font-semibold">Mualliflar</h1>
      <Button onClick={fetchNextPage} disabled={isFetchingNextPage}>
        Fetch Next Page
      </Button>

      <div className="grid grid-cols-3 gap-4 mb-[100px]">
        {authors?.pages.map((page) =>
          page.map((author) => <Card key={author._id} author={author} />)
        )}
      </div>

      {isLoading || isFetchingNextPage ? (
        <div>Loading...</div>
      ) : (
        <>
          {isEmpty?.length === 0 && <div ref={ref}>Fetching next page...</div>}
          {isEmpty?.length > 0 && <div>No Authors Found.</div>}
          {!isLastPageEmpty?.length && <div>There's no author to fetch...</div>}
        </>
      )}
    </div>
  );
};

export default Authors;
