import Card from "./customs/card";
import { useNewsFeatures } from "./features";
import Loading from "./loading";

const News = () => {
  const {
    news: { isLoading, isError, data: news }
  } = useNewsFeatures();

  if (isLoading || isError) return <Loading />;

  return (
    <div className="w-[90%] m-auto">
      <div className="flex justify-between mt-6">
        <h3 className="text-2xl font-semibold">Yangiliklar</h3>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-6">
        {news?.map((news) => (
          <Card key={news._id} {...news} />
        ))}
      </div>
    </div>
  );
};

export default News;
