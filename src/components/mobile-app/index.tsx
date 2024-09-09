const MobileApp = () => {
  return (
    <div className="w-[90%] m-auto h-[417px] flex flex-col justify-end mt-[80px] relative">
      <div className="h-[308px] flex justify-between px-[77px] bg-[#FF8B22]">
        <div>
          <h3 className="text-3xl font-semibold text-[#fff] mt-[36px]">
            Book.uz Mobil ilovamizni <br /> telefoningizga ko’chirib oling
          </h3>
          <div className="flex gap-2 mt-[24px]">
            <div className="flex gap-2 bg-[#fff] rounded-[8px] items-center py-[12px] px-[16px]">
              <div>
                <img
                  src="/icons/apple.svg"
                  alt="apple"
                  className="w-[36px] h-[36px]"
                />
              </div>
              <div>
                <p className="">Download on</p>
                <h3 className="font-semibold">App Store</h3>
              </div>
            </div>
            <div className="flex gap-2 bg-[#fff] rounded-[8px] items-center py-[12px] px-[16px]">
              <div>
                <img
                  src="/icons/google-play.svg"
                  alt="apple"
                  className="w-[36px] h-[36px]"
                />
              </div>
              <div>
                <p className="">Download on</p>
                <h3 className="font-semibold">Google Play</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <img
            src="/icons/book_mobile.png"
            alt="book_mobile "
            className="absolute right-[80px] top-0"
          />
        </div>
      </div>
    </div>
  );
};

export default MobileApp;
