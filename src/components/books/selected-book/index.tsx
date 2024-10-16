import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import BookMaterial from "./customs/book-material";
import Description from "./customs/description";
import Suggestion from "./customs/suggestion";
import AuthorBooks from "./customs/author-books";

const SlectedBoook = () => {
  return (
    <div className=" w-[90%] m-auto flex flex-col gap-6 mt-6">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Asosiy</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/books">Badiiy Kitoblar</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>
              Garry Poter ratsional fikrlash usullari
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <BookMaterial />
      <Description />
      <Suggestion />
      <AuthorBooks />
    </div>
  );
};

export default SlectedBoook;
