import { Button } from "@/components/ui/button";
import { DialogContent, DialogFooter } from "@/components/ui/dialog";

import { useState } from "react";
import SignIn from "./sign-in";
import SignUp from "./sign-up";
import Otp from "./opt";

const AuthDialog = () => {
  const [ui, setUi] = useState<"sign-in" | "sign-up" | "otp">("sign-in");
  return (
    <DialogContent className="sm:max-w-[425px]">
      {ui === "sign-in" && <SignIn />}
      {ui === "sign-up" && <SignUp />}
      {ui === "otp" && <Otp />}
      <DialogFooter>
        {ui === "sign-in" && <Button type="submit">Kirish</Button>}
        {ui === "sign-up" && <Button type="submit">Ro'yxatdam o'tish</Button>}
        {ui === "otp" && <Button type="submit">Tasdiqlash</Button>}
      </DialogFooter>
      {ui === "sign-in" && (
        <div className="flex items-center">
          <h3 className="text-sm">
            Akkauntingiz yo'qmi?
            <Button onClick={() => setUi("sign-up")} variant={"link"}>
              Ro'yxatdan o'tish
            </Button>
          </h3>
        </div>
      )}
      {ui === "sign-up" && (
        <div className="flex items-center">
          <h3 className="text-sm">
            Ro'yxatdan o'tkanmisiz?
            <Button onClick={() => setUi("sign-in")} variant={"link"}>
              Kirish
            </Button>
          </h3>
        </div>
      )}
    </DialogContent>
  );
};

export default AuthDialog;
