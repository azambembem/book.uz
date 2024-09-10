const Carddd = () => {
  return (
    <div className="w-[184px] h-[342px]">
      <div className="relative">
        <img
          src="https://th.bing.com/th/id/OIP.1wAGWqBxIOOiaDVoPFe6gAHaLF?w=186&h=278&c=7&r=0&o=5&dpr=1.9&pid=1.7"
          alt="harry-poter"
          className="h-[255px] rounded-[8px]"
        />
        <div className="absolute bg-[#EF7F1A] w-10 h-10 rounded-full flex items-center justify-center bottom-2 right-5 cursor-pointer">
          <img src="/icons/bag.svg" alt="bag" />
        </div>
      </div>
      <div className="mt-[10px]">
        <h3 className="text-base font-bold">Venetsiya missiyasi</h3>
        <p className="text-[#828282] text-sm">Jeyms Hedli Cheyz</p>
        <h3 className="text-[#EF7F1A] text-base font-bold">38000 so'm</h3>
      </div>
    </div>
  );
};

export default Carddd;
