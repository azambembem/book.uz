import { Slider } from "@/components/ui/slider";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Price = () => {
  const [get, set] = useSearchParams();

  const min = Number(get.get("min") ?? 1);
  const max = Number(get.get("max") ?? 800000);

  const [price, setPrice] = useState<[number, number]>([min, max]);

  useEffect(() => {
    // 슬라이더 값이 변경될 때마다 URL의 쿼리 파라미터를 업데이트
    set({ min: price[0].toString(), max: price[1].toString() });
  }, [price, set]);

  return (
    <div className="p-4 bg-[#f6f6f6]">
      <div className="flex items-center space-x-2 h-[52px]">
        <h3 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Narx
        </h3>
      </div>
      <Slider
        onValueChange={(value: [number, number]) => setPrice(value)}
        // onValueChange={setPrice} // type bermasa qizil chiqadi.
        defaultValue={price}
        max={800000}
        min={1}
        step={2}
      />
      <div className="flex gap-2 mt-2 text-sm">
        Narx: {price[0]} - {price[1]}
      </div>
    </div>
  );
};

export default Price;
