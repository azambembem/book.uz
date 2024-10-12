// import Card from "./customs/card";

// const AuthorBooks = () => {
//   return (
//     <div className="mt-14">
//       <h1 className="text-2xl font-semibold">Muallif kitoblari</h1>

//       <div className="grid grid-cols-6 mt-8">
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//         <Card />
//       </div>
//     </div>
//   );
// };

// export default AuthorBooks;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Card from "./customs/card";

const AuthorBooks = () => {
  const authorId = "66fc297d84c08ee7a4bb2582";

  // 책 정보 가져오기
  const { data: books, isLoading: booksLoading } = useQuery({
    queryKey: ["authorBooks"],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://book-uz-backend.onrender.com/api/authors/${authorId}/books`
      );
      return data.data;
    }
  });

  // 작가 정보 가져오기
  const { data: author, isLoading: authorLoading } = useQuery({
    queryKey: ["authorInfo", authorId],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://book-uz-backend.onrender.com/api/authors/${authorId}`
      );
      return data.data;
    }
  });

  if (booksLoading || authorLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mt-14">
      <h1 className="text-2xl font-semibold">Muallif kitoblari</h1>

      <div className="grid grid-cols-6 mt-8 gap-4">
        {books.map((book) => (
          <Card
            key={book._id}
            book={book}
            authorName={author.fullName} // API에서 가져온 작가의 이름 사용
          />
        ))}
      </div>
    </div>
  );
};

export default AuthorBooks;
