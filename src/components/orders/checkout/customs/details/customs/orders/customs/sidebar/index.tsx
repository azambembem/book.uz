import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useSidebarFeatures } from "./features";

const Sidebar = () => {
  const { onSubmit } = useSidebarFeatures();
  return (
    <div className="w-[287px] ">
      <div className="w-full h-fit bg-[#f6f6f6] rounded-xl p-4">
        <h3 className="text-sm font-semibold">Sizning Burutmangiz</h3>
        <div className="justify-between ">
          <div className="w-full flex justify-between mt-4">
            <h3>Kitoblar (8)</h3>
            <h3 className="font-semibold">28.000so'm</h3>
          </div>
          <div className="w-full flex justify-between mt-4">
            <h3>Chegirma </h3>
            <h3 className="font-semibold">-20.000so'm</h3>
          </div>
          <div className="border-solid border-b border-[#d9d9d9] my-2" />
          <div className="w-full flex justify-between">
            <h3>Jami </h3>
            <h3 className="font-semibold">-20.000so'm</h3>
          </div>
          <div className="w-full flex justify-between">
            <h3>Yetkazib berish vaqti: </h3>
            <h3 className="font-semibold">15 Oct</h3>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <Checkbox id="checkbox" />
        <Label htmlFor="checkbox"> Qoidalar bilan roziman.</Label>
      </div>

      <Button
        onClick={() => onSubmit()}
        className="w-full flex items-center justify-center gap-2 mt-4"
      >
        <img src="/icons/bag.svg" alt="bag" /> <h3>Xarid Qilish</h3>
      </Button>
    </div>
  );
};

export default Sidebar;
