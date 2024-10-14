import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { useSelectedNewsFeatures } from "./features";
import Loading from "./loading";
import Card from "../customs/card";
import { Facebook, Instagram, Twitter } from "lucide-react";
import { useNewsFeatures } from "../features";

const SelectedNews = () => {
  const {
    news: { isLoading, isError, data: news }
  } = useSelectedNewsFeatures();

  const {
    news: { data: allNews }
  } = useNewsFeatures();

  if (isLoading || isError) return <Loading />;

  return (
    <div className="w-[90%] m-auto">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Asosiy</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/news">Yangiliklar</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{news?.title}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="my-10">
        <h1 className="text-2xl font-semibold">{news?.title}</h1>
        <div className="mt-2">
          <h3 className="text-sm">
            {new Date(news?.updatedAt ?? "").toLocaleString()}
          </h3>
        </div>
        <img
          src={news?.imgUrl}
          alt="news-image"
          className="h-[531px] w-full mt-4"
        />
        <div
          className="mt-4"
          dangerouslySetInnerHTML={{ __html: news?.content }}
        />

        <div className="mt-4 flex gap-2">
          <h3 className="text-semibold text-sm"> Bo'lishish</h3>

          <div className="flex gap-2 items-center">
            <div className="h-9 w-9 rounded-full flex items-center justify-center bg-[#cfe5fa]">
              <Facebook color="#0f7ee5" className="w-5 h-5 cursor-pointer" />
            </div>
            <div className="h-9 w-9 rounded-full flex items-center justify-center bg-[#f1d3eb]">
              <Instagram color="#b420a3" className="w-5 h-5 cursor-pointer" />
            </div>
            <div className="h-9 w-9 rounded-full flex items-center justify-center bg-[#cfe5fa]">
              <Twitter color="#0f7ee5" className="w-5 h-5 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-base font-semibold mb-4">Boshqa Yangiliklar</h3>
        <div className="grid grid-cols-4 gap-4">
          {allNews?.map((news) => (
            <Card key={news._id} {...news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectedNews;
