import BooksComponent from "@/components/books";
import { Outlet, useOutlet } from "react-router-dom";
import { SelectedBook } from "./selected-book";

const Books = () => {
	const hasOutlet = useOutlet();
	if (hasOutlet) return <Outlet />;
	return <BooksComponent />;
};
export { SelectedBook };
export default Books;
