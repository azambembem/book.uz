import { Slider } from "@/components/ui/slider";

const Price = () => {
  return (
    <div className="p-4 bg-[#f6f6f6]">
      <div className="flex items-center space-x-2 h-[52px]">
        <h3 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Narx
        </h3>
      </div>
      <Slider defaultValue={[1, 100]} max={100} min={1} step={2} />
    </div>
  );
};

export default Price;
