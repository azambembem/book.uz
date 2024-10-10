// import { Book } from "lucide-react";

// const AuthorMaterial = () => {
//   return (
//     <div className="flex gap-4 h-[392px]">
//       <div className="flex-1 mt-6">
//         <img
//           src="https://th.bing.com/th/id/OIP.yICX8jrf9-Xu-XAR4paHEgHaGL?w=191&h=180&c=7&r=0&o=5&dpr=1.9&pid=1.7"
//           alt="img"
//           className="w-[392px] h-[392px] rounded-full object-cover"
//         />
//       </div>
//       <div className="flex-1">
//         <h1 className="text-2xl font-semibold">Stiven King</h1>
//         <p className="mt-4">(21.09.1947 - hozir)</p>
//         <div className="flex gap-2 mt-6">
//           <Book color="#107fe4" />
//           <h3 className="text-[#107fe4]">24 kitob</h3>
//         </div>

//         <h3 className="text-base font-semibold mt-6">Muallif haqida</h3>
//         <p>
//           Vikas Svarupning ajoyib debyut romani Hindistonning Mumbay shahridagi
//           qamoqxona kamerasidagi sahnalar bilan boshlanadi. Chunki asar
//           qahramoni Ram Muhammad Tomas mamlakatdagi eng katta viktorina bo‘lmish
//           "Kim milliard yutib oladi?" teleshousida 12 savolning barchasiga
//           to‘g‘ri javob bergach, shu yerga olib kelinadi. Umrida maktabga
//           bormagan, loaqal biror gazeta o‘qimagan kambag‘al yetim bolaning
//           bunday tanlovda g‘alaba qozonishiga aql bovar qilmaydi. Biroq Ram bir
//           qator hayajonli hikoyalar orqali hayotida boshidan kechirgan hodisalar
//           viktorina savollariga javob berishda qanday asqatganini advokatiga
//           so‘zlab beradi.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default AuthorMaterial;

import { Book } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

const AuthorMaterial = () => {
  const { id } = useParams();
  const { data: author, isLoading } = useQuery({
    queryKey: ["author", id],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://book-uz-backend.onrender.com/api/authors/${id}`
      );
      return data.data;
    }
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex gap-4 h-[392px]">
      <div className="flex-1 mt-6">
        <img
          src={author?.imgUrl || "https://via.placeholder.com/392"}
          alt={author?.fullName}
          className="w-[392px] h-[392px] rounded-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h1 className="text-2xl font-semibold">{author?.fullName}</h1>

        <div className="flex gap-2 mt-6">
          <Book color="#107fe4" />
          <h3 className="text-[#107fe4]">{author?.bookCount} kitob</h3>
        </div>

        <h3 className="text-base font-semibold mt-6">Muallif haqida</h3>
        <p>{author?.biography || "Biografiyasi mavjud emas."}</p>
      </div>
    </div>
  );
};

export default AuthorMaterial;
