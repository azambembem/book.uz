import { useLocation, useSearchParams } from "react-router-dom";

export const useSearchAppParams = () => {
  const { search } = useLocation();
  const [get, set] = useSearchParams();

  const params = new URLSearchParams(search);

  const getAllParams = () => {
    return {
      keys: Array.from(params.keys()),
      values: Array.from(params.values()),
      pair: Object.fromEntries(Array.from(params.entries()))
    };
  };

  const removeParamsByKeys = ({ keys }: { keys: string[] }) => {
    const { pair } = getAllParams();

    for (const key of keys) delete pair[key];

    set({ ...pair });
  };

  const setParams = (params: { [key: string]: string }) => {
    const { pair } = getAllParams();
    set({ ...pair, ...params });
  };

  const clearParams = () => {
    set({});
  };

  const getParams = (params: string) => get.get(params);

  return {
    getAllParams,
    removeParamsByKeys,
    setParams,
    getParams,
    clearParams
  };
};
