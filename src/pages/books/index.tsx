import BooksComponent from "@/components/books";
import { SelectedBook } from "./selected-book";
import { Outlet, useOutlet } from "react-router-dom";

const Books = () => {
  const hasOutlet = useOutlet();
  if (hasOutlet) return <Outlet />;
  return <BooksComponent />;
};
export { SelectedBook };
export default Books;
