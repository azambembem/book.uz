import { useReduxSelector } from "@/hooks/useRedux";
import {useOrderService} from "@/services/order/features"
import type{ TUser } from "@/types";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

type ON_SUBMIT = () => Promise<void>;

type SidebarFeatures = {
    onSubmit: ON_SUBMIT;
};

export const useSidebarFeatures = (): SidebarFeatures => {

    const user = useAuthUser<TUser>();
    const headers = useAuthHeader()
    const navigate  = useNavigate()
    const {books, totalSum} = useOrderService();
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
                    region: checkout.hudud?._id,
                    district: checkout.tuman?._id,
                    extraAddress: checkout.manzil
            },
            price: totalSum,
        },
        headers: {
            Authorization: headers,
        },
        method: 'POST',
        
    });
    toast("Sizning buyurtmangiz qabul qilindi.")

    navigate("/")
};

    return {onSumbit}

};