import Card from "./card";

const Xabarlar = () => {
  return (
    <div className="mt-6">
      <h1 className="text-xl font-semibold">Xabarlar</h1>
      <div className="flex gap-4 mt-4">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Xabarlar;
