import { route } from "@/utils/route";
import { Camera, Combine } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <div className="min-w-[289px] max-w-[280px] p-6 bg-[#f6f6f6] rounded-xl h-fit">
      <div className="flex flex-col items-center">
        <div className="relative w-fit">
          <img
            className="w-[100px] h-[100px] rounded-full"
            src="https://www.searchenginejournal.com/wp-content/uploads/2019/02/Should-We-Write-Content-for-People-or-Search-Engines.png"
            alt="random-img"
          />
          <div className="w-7 h-7 rounded-full items-center justify-center bg-white absolute bottom-0 right-0 cursor-pointer">
            <Camera className="w-4 h-4" />
          </div>
        </div>
        <h1 className="text-xl font-semibold mt-3 ">Abduganiev Sardor</h1>
        <h3 className="font-sm mt-2">+998777771565</h3>
      </div>
      <div className="w-full h-[1px] bg-[#dbdbdb] mt-5" />
      <div className="mt-5 flex flex-col gap-5">
        <div 
		 className="flex gap-2 items-center cursor-pointer hover:text-[#ef7f1a]" 
		 {
			route.map(({title, path, id})=> (
				<div key={id} onClick={() => navigate(path)}>
                    <Combine className="w-4 h-4" />
                    <h3 className="text-sm">{title}</h3>
                </div>
			))
		 }
		 >
          {/* <Combine className="w-4 h-4" />
          <h3 className="text-sm"> */}
            Dashboard
          {/* </h3> */}
        </div>
        <div className="flex gap-2 items-center cursor-pointer hover:text-[#ef7f1a]">
          <Combine className="w-4 h-4" />
          <h3 className="text-sm">Mening Buyurtmalarim</h3>
        </div>
        <div className="flex gap-2 items-center cursor-pointer hover:text-[#ef7f1a]">
          <Combine className="w-4 h-4" />
          <h3 className="text-sm">Sozlamalar</h3>
        </div>
      </div>
      <div className="w-full h-[1px] bg-[#dbdbdb] mt-5" />
      <div className="mt-5 flex flex-col gap-5">
        <div className="flex gap-2 items-center cursor-pointer hover:text-[#ef7f1a]">
          <Combine className="w-4 h-4" />
          <h3 className="text-sm">Akkountdan chiqish</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
