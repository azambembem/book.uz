// import axios from "axios";

// export const useAxios = () => {
//     return async ({url, method = "GET", params, data, headers}) => {
//         return await axios({
//             url: `http://localhost:8080/api${url}`,
//             method,
//             params: {
//                 access_token: "64a1f02e8971432404826625",
//                 ...params,
//             },
//             data,
//             headers: {
//                 Authorization: `Bearer ${localStorage.getItem("access_token")}`,
//                 ...headers,
//             }
//         })
//     }
// }


import axios, { AxiosResponse } from "axios";

export const useAxios = () => {
    return async ({
        url, 
        method = "GET", 
        params, 
        data, 
        headers
    }: {
        url: string;
        method?: string;
        params?: Record<string, unknown>;
        data?: unknown;
        headers?: Record<string, string>;
    }): Promise<AxiosResponse> => {
        return await axios({
            url: `http://localhost:8080/api${url}`,
            method,
            params: {
                access_token: "64a1f02e8971432404826625",
                ...params,
            },
            data,
            headers: {
                Authorization: `Bearer ${localStorage.getItem("access_token")}`,
                ...headers,
            }
        });
    };
};

