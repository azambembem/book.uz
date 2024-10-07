import { useSearchAppParams } from "@/hooks/useRedux/useSearchParams";
import {useQuery} from "@tanstack/react-query"
import axios from "axios";



export const useBodyFeatures = () => {
    const {getParams} = useSearchAppParams();
    const genreIds = getParams("category") ?? "all-category";
    const authorIds = getParams("author") ?? "all-author";
    const language = getParams("language") ?? "all-language";
    const key = `?genreIds=${genreIds}&author${authorIds}&language=${language}`;
    

    const books = useQuery({
        queryKey: [key],
        queryFn: async () => {
            const {data} = await axios({
                url: `https://book-uz-backend.onrender.com/api/books${key}`,
               
            })
            return data.data;
        },
       
    })


    return {books}
}