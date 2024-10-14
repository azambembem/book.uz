import type { TNews } from "@/types";
import type { FC } from "react";
import { useNavigate } from "react-router-dom";

const Card: FC<TNews> = (news) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/news/${news._id}`)}
      className="h-[280px] rounded-[8px] relative cursor-pointer"
    >
      <img
        className="w-full h-full rounded-[8px]"
        src={news.imgUrl}
        alt="piled-book"
      />
      <div className="bg-[#000] w-full h-full absolute top-0 left-0 opacity-[0.5] rounded-[8px]" />
      <div className="w-full h-full p-4 absolute top-0 left-0  rounded-[8px] flex flex-col items-start justify-end text-white">
        <p className="text-xs">{news.updatedAt}</p>
        <h3 className="text-base font-semibold mt-2">{news.title}</h3>
      </div>
    </div>
  );
};

export default Card;
