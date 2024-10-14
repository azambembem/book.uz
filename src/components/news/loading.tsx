import { Skeleton } from "../ui/skeleton";

const Loading = () => {
  return (
    <div className="w-[90%] m-auto">
      <div className="flex justify-between mt-6">
        <h3 className="text-2xl font-semibold">Yangiliklar</h3>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-6 mb-">
        <Skeleton className="h-[280px] rounded-[8px]" />
        <Skeleton className="h-[280px] rounded-[8px]" />
        <Skeleton className="h-[280px] rounded-[8px]" />
        <Skeleton className="h-[280px] rounded-[8px]" />
        <Skeleton className="h-[280px] rounded-[8px]" />
        <Skeleton className="h-[280px] rounded-[8px]" />
        <Skeleton className="h-[280px] rounded-[8px]" />
        <Skeleton className="h-[280px] rounded-[8px]" />
        <Skeleton className="h-[280px] rounded-[8px]" />
      </div>
    </div>
  );
};

export default Loading;
