import Card from "./customs/card";

const Suggestion = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Tavsiya qilamiz</h1>
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

export default Suggestion;
