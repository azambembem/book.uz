import { TNews } from "@/types"
import { useQuery} from "@tanstack/react-query"
import type{UseQueryResult} from "@tanstack/react-query";
import axios from "axios"
import { useParams } from "react-router-dom";

type SelectedNewsFaetures = {
    news: UseQueryResult<TNews, Error>
}

export const useSelectedNewsFeatures = (): SelectedNewsFaetures => {
    const {id} = useParams()
    const news = useQuery({
        queryKey: [`news/${id}`],
        queryFn: async () => {
            const {data} = await axios({
                url: `https://book-uz-backend.onrender.com/api/news/${id}`,
            })
            return data.data;
        }
    })
    return {news}
}