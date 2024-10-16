import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Info = () => {
  return (
    <div className="border border-solid border-[#e7e7e7] rounded-xl p-4">
      <h1 className="text-sm font-semibold">Malumotlar *</h1>

      <div className="flex gap-4 mt-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="ismingiz">Ismingiz</Label>
          <Input type="ismingiz" id="ismingiz" placeholder="Ismingiz" />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="familiyangiz">Familiyangiz</Label>
          <Input
            type="familiyangiz"
            id="familiyangiz"
            placeholder="Familiyangiz"
          />
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="telefon-raqam">Telefon Raqam</Label>
          <Input type="telefon-raqam" id="telefon-raqam" placeholder="+998" />
        </div>
      </div>
    </div>
  );
};

export default Info;
