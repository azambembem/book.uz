import type { TGenre } from "@/types/home";
import { type UseQueryResult, useQuery } from "@tanstack/react-query";
import axios from "axios";

type FlayerFeatures = {
	genres: UseQueryResult<TGenre[] | null, Error>;
};

export const useFlayerFeatures = (): FlayerFeatures => {
	const genres = useQuery({
		queryKey: ["genres"],
		queryFn: async () => {
			const { data } = await axios({
				url: "https://book-uz-backend.onrender.com/api/genres",
			});
			return data.data;
		},
	});

	return {
		genres,
	};
};
