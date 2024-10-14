import Card from "./customs/card";
import { useNewsFeatures } from "./features";

const News = () => {
  const { news } = useNewsFeatures();
  return (
    <div className="w-[90%] m-auto">
      <div className="flex justify-between mt-6">
        <h3 className="text-2xl font-semibold">Yangiliklar</h3>
      </div>
      <div className="flex gap-4 mt-6">
        <Card />
      </div>
    </div>
  );
};

export default News;
