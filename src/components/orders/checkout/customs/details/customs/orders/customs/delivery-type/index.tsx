import { Heart } from "lucide-react";

const DeliveryType = () => {
  return (
    <div className="border border-solid border-[#e7e7e7] rounded-xl p-4">
      <h1 className="text-sm font-semibold">Yetkazib berish usuli *</h1>

      <div className="flex gap-4 mt-4">
        <div className="flex-1 p-4 bg-[#f6f6f6] rounded-xl cursor-pointer">
          <div className="flex gap-2 items-center">
            <img src="/icons/take_away.svg" alt="" className="w-4 h-4" />
            <h3 className="font-semibold">Borib olish</h3>
          </div>
          <p>Buyurtma qabul qilingandan keyin to'lov amalga oshiriladi.</p>
        </div>
        <div className="flex-1 p-4 bg-[#f6f6f6] rounded-xl cursor-pointer">
          <div className="flex gap-2 items-center">
            <img src="/icons/fast_deliver.svg" alt="" className="w-4 h-4" />
            <h3 className="font-semibold">Kuryer orqali</h3>
          </div>
          <p>Buyurtma qabul qilingandan keyin to'lov amalga oshiriladi.</p>
        </div>
        <div className="flex-1 p-4 bg-[#f6f6f6] rounded-xl cursor-pointer">
          <div className="flex gap-2 items-center">
            <img src="/icons/mail.svg" alt="" className="w-4 h-4" />
            <h3 className="font-semibold">Pochta orqali</h3>
          </div>
          <p>Buyurtma qabul qilingandan keyin to'lov amalga oshiriladi.</p>
        </div>
      </div>
    </div>
  );
};

export default DeliveryType;
