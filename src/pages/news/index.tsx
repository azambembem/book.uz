import { Outlet, useOutlet } from "react-router-dom";
import { SelectedNews } from "./selected-news";
import NewsComponent from "@/components/news";

const News = () => {
  const hasOutlet = useOutlet();
  if (hasOutlet) return <Outlet />;
  return <NewsComponent />;
};
export { SelectedNews };
export default News;
