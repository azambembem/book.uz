// import { Book } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const Card = () => {
//   const navigate = useNavigate();
//   return (
//     <div
//       className="bg-[#f6f6f6] p-4 flex gap-4 items-center rounded-2xl"
//       onClick={() => navigate("authors/1")}
//     >
//       <img
//         src="https://th.bing.com/th/id/OIP.yICX8jrf9-Xu-XAR4paHEgHaGL?w=191&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7"
//         alt="img"
//         className="w-[120px] h-[120px] rounded-full"
//       />
//       <div>
//         <h1 className="text-xl font-semibold">Stiven King</h1>
//         <h3>21.09.2024</h3>
//         <div className="flex gap-2">
//           <Book color="#107fe4" />
//           <h3 className="text-[#107fe4]">24 kitob</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;

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
