import {
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from "@/components/ui/input-otp";
import { useReduxDispatch } from "@/hooks/useRedux";
import { setOtp } from "@/redux/slices/auth";

const Otp = () => {
  const dispatch = useReduxDispatch();

  return (
    <div>
      <DialogHeader>
        <DialogTitle>OTP</DialogTitle>
        <DialogDescription>
          Telefoningizga yuborilgan bir martalik SMS-kodni kiriting
        </DialogDescription>
      </DialogHeader>

      <div className="w-full flex mt-2 gap-2 items-start justify-center">
        <InputOTP
          onChange={(e) => dispatch(setOtp({ verification: e }))}
          maxLength={6}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
    </div>
  );
};

export default Otp;
