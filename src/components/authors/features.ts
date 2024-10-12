import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

export const useAuthorsFeatures = () => {
  const authors = useInfiniteQuery({
    queryKey: ["authors"],
    queryFn: async ({ pageParam }) => {
      const { data } = await axios({
        url: `https://book-uz-backend.onrender.com/api/authors?page=${pageParam}&limit=10`,
      });
      return data.data  ??  [];
    },
    initialPageParam: 1,
    getNextPageParam: (_, pages) => pages.length + 1,
    staleTime: Infinity,
  });

  return { authors };
};
