import { TGenre } from "@/types/home";
import { UseQueryResult } from "@tanstack/react-query"
import {useQuery} from "@tanstack/react-query"
import axios from "axios";

type AllAuthorsFeatures = {
    all_authors: UseQueryResult<TGenre[] | null, Error>;
 }

export const useAllAuthorFeatures = (): AllAuthorsFeatures => {
    const all_authors = useQuery({
        queryKey: ['all_authors'],
        queryFn: async () => {
            const {data} = await axios({
                url: 'https://book-uz-backend.onrender.com/api/authors',
                method: 'GET',
            })
            return data.data;
        },
       
    })


    return {all_authors}
}