import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Manzil = () => {
  return (
    <div className="border border-solid border-[#e7e7e7] rounded-xl p-4">
      <h1 className="text-sm font-semibold">Manzil *</h1>

      <div className="flex gap-4 mt-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="ismingiz">Hudud</Label>
          <Input type="hudud" id="hudud" placeholder="Hudud" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="familiyangiz">Tuman</Label>
          <Input type="tuman" id="tuman" placeholder="Tuman" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="telefon-raqam">Manzil</Label>
          <Input type="manzil" id="manzilm" placeholder="Manzil" />
        </div>
      </div>
      <div className="mt-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="location">Yoli lakatsiyangizni tanlang</Label>
          <Input type="search" id="location" placeholder="Qidirish" />
        </div>
      </div>
    </div>
  );
};

export default Manzil;
