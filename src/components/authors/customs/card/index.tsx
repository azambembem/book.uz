import { Book } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Card = ({ author }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#f6f6f6] p-4 flex gap-4 items-center rounded-2xl cursor-pointer"
      onClick={() => navigate(`/authors/${author._id}`)}
    >
      <img
        src={author.imgUrl || "https://via.placeholder.com/120"}
        alt={author.fullName}
        className="w-[120px] h-[120px] rounded-full"
      />
      <div>
        <h1 className="text-xl font-semibold">{author.fullName}</h1>
        <h3>{author.createdAt}</h3>
        <div className="flex gap-2">
          <Book color="#107fe4" />
          <h3 className="text-[#107fe4]">{author.bookCount} kitob</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
