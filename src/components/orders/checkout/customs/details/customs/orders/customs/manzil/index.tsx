import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import { useManzilFeatures } from "./features";
import { useReduxDispatch } from "@/hooks/useRedux";
import { setCheckout } from "@/redux/slices/order";

const Manzil = () => {
  const dispatch = useReduxDispatch();
  const {
    hudud: { data: hudud },
    tuman: { data: tuman }
  } = useManzilFeatures();
  return (
    <div className="border border-solid border-[#e7e7e7] rounded-xl p-4">
      <h1 className="text-sm font-semibold">Manzil *</h1>

      <div className="flex gap-4 mt-4">
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="ismingiz">Hudud</Label>
          <Select
            onValueChange={(value) => {
              dispatch(
                setCheckout({
                  hudud: hudud?.find((hudud) => hudud._id === value)
                })
              );
            }}
          >
            <SelectTrigger id="hudud">
              <SelectValue placeholder="Hudud" />
            </SelectTrigger>
            <SelectContent>
              {hudud?.map((hudud) => (
                <SelectItem key={hudud._id} value={hudud._id}>
                  {hudud.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="familiyangiz">Tuman</Label>
          <Select
            onValueChange={(value) => {
              dispatch(
                setCheckout({
                  tuman: tuman?.find((hudud) => hudud._id === value)
                })
              );
            }}
          >
            <SelectTrigger id="tuman">
              <SelectValue placeholder="Tuman" />
            </SelectTrigger>
            <SelectContent>
              {tuman?.map((tuman) => (
                <SelectItem key={tuman._id} value={tuman._id}>
                  {tuman.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="telefon-raqam">Manzil</Label>
          <Input
            onChange={(e) => dispatch(setCheckout({ manzil: e.target.value }))}
            type="manzil"
            id="manzilm"
            placeholder="Manzil"
          />
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
