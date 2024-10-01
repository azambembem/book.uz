import Card from "./customs/card";

const Authors = () => {
  return (
    <div className=" w-[90%] m-auto flex-col gap-6 mt-6">
      <h1 className="text-2xl font-semibold">Mualliflar</h1>

      <div className="grid grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
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

export default Authors;
