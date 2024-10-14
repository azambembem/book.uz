import type{ TNews } from "@/types";
import { useQuery } from "@tanstack/react-query";
import type {UseQueryResult} from "@tanstack/react-query"
import axios from "axios";

type useNewsFeatures = {
    news: UseQueryResult<TNews[], Error>;
}

export const useNewsFeatures = (): NewsFeatures => {
    const news = useQuery({
        queryKey: ['news'],
        queryFn: async () => {
            const {data} = await axios({
                url: 'https://book-uz-backend.onrender.com/api/news'
            });
            return data.data;
        },
    });
    return {news}
}