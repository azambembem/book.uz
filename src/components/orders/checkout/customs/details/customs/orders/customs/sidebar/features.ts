import { useReduxSelector } from "@/hooks/useRedux";
import type{ TUser } from "@/types";
import axios from "axios";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";

type ON_SUBMIT = () => Promise<void>;

type SidebarFeatures = {
    onSubmit: ON_SUBMIT;
};

export const useSidebarFeatures = (): SidebarFeatures => {

    const user = useAuthUser<TUser>();
    const {books} = useOrderServi();
    const {checkout} = useReduxSelector(({order})=> order)


    const onSumbit: ON_SUBMIT = async () =>{
        const {data} = await axios({
            method: 'POST',
            url: 'https://book-uz-backend.onrender.com/api/orders',
            data: {
                user: user?._id,
                books: books.map(({ _id, quantity }) => ({ book:_id, quantity})),
                delivery_method:"postal",
                payment_method: "click",
                billingAddress: {

            }
        }
        
    });

    };

    return {onSumbit}

};