import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const Info = () => {
  return (
    <div className="flex-1 pl-20">
      <h1 className="text-2xl font-semibold">
        Garri Potter va ratsional fikrlash usullari 2-qism
      </h1>

      <p className="text-base text-blue-500 mt-4">Eliezer Yudovskiy</p>
      <div>
        <div className="flex gap-2 items-center">
          <Star fill="#ef7f1a" color="#ef7f1a" />{" "}
          <h3 className="text-[#ef7f1a] font-semibold">4.8</h3>
          <p>(56 odam)</p>
          <Button variant={"link"}>Baxo berish</Button>
        </div>
        <h1 className="text-2xl font-semibold text-[#ef7f1a]">38.000so'm</h1>
      </div>
      <div className="w-full mt-6 flex flex-col gap-6">
        <div className="flex justify-between">
          <h3 className="text-[#5e5e5e]">Muqova</h3>
          <div className="flex-1 border-b border-dashed" />
          <h3>Qattiq</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[#5e5e5e]">Betlar soni</h3>
          <div className="flex-1 border-b border-dashed" />
          <h3>360</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[#5e5e5e]">Yil</h3>
          <div className="flex-1 border-b border-dashed" />
          <h3>2020</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[#5e5e5e]">Til</h3>
          <div className="flex-1 border-b border-dashed" />
          <h3>Rus tili</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[#5e5e5e]">Nashriyot</h3>
          <div className="flex-1 border-b border-dashed" />
          <h3>Arzon kitoblari</h3>
        </div>
        <div className="flex justify-between">
          <h3 className="text-[#5e5e5e]">ISBN</h3>
          <div className="flex-1 border-b border-dashed" />
          <h3>978-9943-20-974-9</h3>
        </div>
      </div>

      <div className="mt-6 gap-4 flex">
        <Button className="bg-[#EF7F1A]">Savatchaga qo‘shish</Button>
        <Button
          className="text-[#EF7F1A] border-solid border-2 border-orange-200"
          variant={"ghost"}
        >
          Tezkor sotib olish
        </Button>
      </div>
    </div>
  );
};

export default Info;
