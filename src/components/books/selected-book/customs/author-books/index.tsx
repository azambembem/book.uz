import Card from "./customs/card";

const AuthorBooks = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Muallif kitoblari</h1>
      <div className="grid grid-cols-6 grid-rows-1 mt-8">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default AuthorBooks;
