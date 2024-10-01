import AuthorsComponents from "@/components/authors";
import { Outlet, useOutlet } from "react-router-dom";
import { SelectedAuthor } from "./selected-author";

const Authors = () => {
  const hasOutlet = useOutlet();

  if (hasOutlet) return <Outlet />;

  return <AuthorsComponents />;
};

export { SelectedAuthor };
export default Authors;
