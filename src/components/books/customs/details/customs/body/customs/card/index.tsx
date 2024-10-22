import { useOrderService } from "@/services/order";
import type { IBook } from "@/types";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Card: FC<IBook> = (book) => {
  const navigate = useNavigate();
  const { onAdd } = useOrderService();
  return (
    <div className="w-full h-full">
      <div className="relative">
        <img src={book.imgUrl} alt="img" className="w-full h-[500px]" />
        <div
          onClick={() => {
            onAdd(book);
            toast("Kitob savatchaga qo'shildi");
          }}
          className="w-[52px] h-[52px] rounded-full bg-[#ef7f1a] flex items-center justify-center absolute bottom-3 right-3 cursor-pointer"
        >
          <img src="/icons/bag.svg" alt="bag" className="w-[40px] h-[40px]" />
        </div>
      </div>
      <div className="mt-3">
        <h1
          className="text-xl font-semibold cursor-pointer"
          onClick={() => navigate(`/books/${book._id}`)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              navigate("/books/1");
            }
          }}
        >
          {book.name}
        </h1>

        <p className="text-xs">{book.author.fullName}so'm</p>
        <h3 className="text-xl text-[#ef7f1a] font-semibold">
          {book.bookPrice}
        </h3>
      </div>
    </div>
  );
};

export default Card;
