import { TGenre } from "@/types/home";
import { UseQueryResult } from "@tanstack/react-query"
import {useQuery} from "@tanstack/react-query"
import axios from "axios";

type AllCategoriesFeatures = {
    all_categories: UseQueryResult<TGenre[] | null, Error>;
 }

export const useAllCategoriesFeatures = (): AllCategoriesFeatures => {
    const all_categories = useQuery({
        queryKey: ['all-categories'],
        queryFn: async () => {
            const {data} = await axios({
                url: 'https://book-uz-backend.onrender.com/api/genres',
                method: 'GET',
            })
            return data.data;
        },
       
    })


    return {all_categories}
}