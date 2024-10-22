import { Button } from "@/components/ui/button";
import { Delete, Heart } from "lucide-react";
import type { FC } from "react";
import type { IBook } from "@/types";
import { useOrderService } from "@/services/order";

const Card: FC<IBook & { quantity: number }> = (book) => {
  const { onPlus, onMinus, onRemove } = useOrderService();

  return (
    <div className="bg-[#f6f6f6] rounded-xl p-4 flex justify-between h-[175px] ">
      <div className="flex gap-4 h-full">
        <img
          src={book.imgUrl}
          alt="img"
          className="h-full w-[102px] rounded-md"
        />
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-base font-semibold">{book.name}</h3>
            <span className="text-sm font-normal">
              Narxi: {book.bookPrice}so'm
            </span>
          </div>

          <div className="flex gap-2">
            <Button>
              <Heart className="w-4 h-4 mr-4" /> Sevimlilar
            </Button>
            <Button onClick={() => onRemove(book)} variant="ghost">
              <Delete className="w-4 h-4 mr-4" /> O'chirish
            </Button>
          </div>
        </div>
      </div>
      <div className="gap-4 flex flex-col h-full">
        <h3 className="font-semibold text-base">
          {book.bookPrice}
          <span className="text-sm font-light"> so'm</span>
        </h3>
        <div className="mt-auto rounded-xl border-solid border-[#d7d7d7] w-[126px] h-[44px] bg-[#fff] p-2 flex justify-between items-center">
          <Button
            variant="ghost"
            className="w-[30px] h-[30px] rounded-full bg-[#dbedfa] flex items-center justify-center text-[#3100e9]"
            onClick={() => onMinus(book)}
          >
            -
          </Button>
          <h3 className="text-sm font-semibold text-[#3100e9]">
            {book.quantity}
          </h3>
          <Button
            variant="ghost"
            className="w-[30px] h-[30px] rounded-full bg-[#dbedfa] flex items-center justify-center text-[#3100e9]"
            onClick={() => onPlus(book)}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
