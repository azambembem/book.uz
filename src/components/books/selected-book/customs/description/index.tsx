import { Toggle } from "@/components/ui/toggle";
import Info from "./custom/info";

const Description = () => {
  return (
    <div>
      <div className="flex gap-4 ">
        <Toggle>Ma'lumot</Toggle>
        <Toggle>Izohlar</Toggle>
        <Toggle>Iqtiboslar</Toggle>
      </div>
      <div className="mt-4">
        <Info />
      </div>
    </div>
  );
};

export default Description;
