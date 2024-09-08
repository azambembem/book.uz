import { useState, type FC } from "react";
import { Button } from "../ui/button";
import { Facebook, Instagram, Languages, Search, Twitter } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";

const Navbar: FC = () => {
  const [language, setLanguage] = useState("uz");
  return (
    <div className="flex justify-between items-center h-[59px] w-[90%] m-auto ">
      <div className="flex-1 flex gap-4 items-end ">
        <img src={"/icons/logo.svg"} alt="logo" />
        <h3>Kitob eng yaxshi - sovg'a</h3>
        <Button className="ml-10 pb-0" variant={"link"}>
          Qanday xarid qilinadi?
        </Button>
      </div>
      <div className="flex-1 flex gap-4 items-end justify-end">
        <Button variant={"ghost"}>
          <Search />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              <Languages />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            <DropdownMenuLabel>Change Language</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={language}
              onValueChange={setLanguage}
            >
              <DropdownMenuRadioItem value="en">En</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="uz">Uz</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="right">Ru</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button className="pb-0" variant={"link"}>
          +998717771565
        </Button>
        <Button className="pb-0" variant="outline">
          <Facebook />
        </Button>
        <Button className="pb-0" variant="outline">
          <Instagram />
        </Button>
        <Button className="pb-0" variant="outline">
          <Twitter />
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
