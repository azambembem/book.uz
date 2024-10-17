import { useReduxSelector } from "@/hooks/useRedux";
import type { THudud, TTuman } from "@/types";
import { useQuery } from "@tanstack/react-query"
import type {UseQueryResult} from "@tanstack/react-query"
import axios from "axios"
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

type ManzilFeatures = {
    hudud: UseQueryResult<THudud[], Error>;
    tuman: UseQueryResult<TTuman[], Error>;
}

export const useManzilFeatures = (): ManzilFeatures => {
    const authHeader = useAuthHeader()

    const {checkout} = useReduxSelector(({order})=> order);
    
    const hudud = useQuery({
        
        queryKey: ['hudud'],
        queryFn: async () => {
            const {data} = await axios({
                url: "https://book-uz-backend.onrender.com/api/user-api/regions",
                headers: {Authorization: authHeader},
            })
            return data.data
        }
    })

    const tuman = useQuery({
        
        queryKey: [`tuman/${checkout.hudud?._id}`],
        queryFn: async () => {
            const {data} = await axios({
                url: `https://book-uz-backend.onrender.com/api/user-api/districts/${checkout.hudud?._id}`,
                headers: {Authorization: authHeader},
            })
            return data.data
        }
    })
    
    return {hudud, tuman}

}