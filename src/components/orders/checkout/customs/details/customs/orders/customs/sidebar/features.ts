import { useReduxSelector } from "@/hooks/useRedux";
import { useOrderService } from "@/services/order";
import type { TUser } from "@/types";
import axios from "axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
import useAuthUser from "react-auth-kit/hooks/useAuthUser";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

type ON_SUBMIT = () => Promise<void>;

type SidebarFeatures = {
	onSubmit: ON_SUBMIT;
};

export const useSidebarFeatures = (): SidebarFeatures => {
	const user = useAuthUser<TUser>();
	const headers = useAuthHeader();
	const navigate = useNavigate();
	const { books, totalSum } = useOrderService();
	const { checkout } = useReduxSelector(({ order }) => order);

	const onSubmit: ON_SUBMIT = async () => {
		const { data } = await axios({
			url: "https://book-uz-backend.onrender.com/api/orders",
			data: {
				user: user?._id,
				books: books.map(({ _id, quantity }) => ({ book: _id, quantity })),
				delivery_method: "postal",
				payment_method: "click",
				billingAddress: {
					region: checkout.hudud?._id,
					district: checkout.tuman?._id,
					extraAddress: checkout.manzil,
				},
				price: totalSum,
			},
			headers: {
				Authorization: headers,
			},
			method: "POST",
		});

		toast("Sizning buyurtmangiz qabul qilindi");

		navigate("/");
	};

	return { onSubmit };
};
