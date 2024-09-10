import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const Week = () => {
  return (
    <div className="w-[90%] m-auto mt-[80px] mb-[100px]">
      <div className="flex justify-between">
        <h3 className="text-2xl mt">Hafta taklifi</h3>
      </div>

      <div className="grid grid-cols-3 mt-4 gap-[32px]">
        <div className="h-[198px] px-[26px] py-4 bg-[#107FE41A] rounded-[8px]">
          <img src="" alt="book" />
          <h3 className="mt-4 text-[#107FE4] font-semibold">
            Venetsiya missiyasi <br />
            2-qism
          </h3>
          <p className="text-sm text-[#000] mt-2">Jeyms Hedli Cheyz</p>
          <p>4.8 (56 odam)</p>
          <h3>38 000 sum</h3>
        </div>
        <div className="h-[198px] px-[26px] py-4 bg-[#107FE41A] rounded-[8px]">
          <img src="" alt="book" />
          <h3 className="mt-4 text-[#107FE4] font-semibold">
            Venetsiya missiyasi <br />
            2-qism
          </h3>
          <p className="text-sm text-[#000] mt-2">Jeyms Hedli Cheyz</p>
          <p>4.8 (56 odam)</p>
          <h3>38 000 sum</h3>
        </div>
        <div className="h-[198px] px-[26px] py-4 bg-[#107FE41A] rounded-[8px]">
          <img src="" alt="book" />
          <h3 className="mt-4 text-[#107FE4] font-semibold">
            Venetsiya missiyasi <br />
            2-qism
          </h3>
          <p className="text-sm text-[#000] mt-2">Jeyms Hedli Cheyz</p>
          <p>4.8 (56 odam)</p>
          <h3>38 000 sum</h3>
        </div>
      </div>
      <Carousel className="h-[352px] mt-[100px]">
        <CarouselContent>
          <CarouselItem>
            <img
              alt="random-img"
              src="https://backend.book.uz/user-api/img/img-file-8b2932332fb44e6dfbff98d79874b3ed.jpg"
              className="w-full h-[352px] rounded-[8px]"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              alt="random-img"
              src="https://backend.book.uz/user-api/img/img-file-ea287d1046ca94ade13ec003f14a6329.jpg"
              className="w-full h-[352px] rounded-[8px]"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              alt="random-img"
              src="https://backend.book.uz/user-api/img/img-file-115311b6a63ad768c8e085fc19542a31.jpg"
              className="w-full h-[352px] rounded-[8px]"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              alt="random-img"
              src="https://backend.book.uz/user-api/img/img-file-ce4d6accc9e77624d00fef8267891240.jpg"
              className="w-full h-[352px] rounded-[8px]"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              alt="random-img"
              src="https://backend.book.uz/user-api/img/img-file-a94ecc322cd051cb83ca21faf2773ee0.jpg"
              className="w-full h-[352px] rounded-[8px]"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Week;
