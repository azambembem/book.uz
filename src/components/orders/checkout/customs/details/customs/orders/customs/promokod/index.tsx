import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Promokod = () => {
  return (
    <div className="border border-solid border-[#e7e7e7] rounded-xl p-4">
      <h1 className="text-sm font-semibold">Promokod</h1>

      <div className="flex gap-4 mt-4">
        <div className="flex gap-2">
          <Input id="promokod" placeholder="Promokod" />
          <Button>Foydalanish</Button>
        </div>
      </div>
    </div>
  );
};

export default Promokod;
