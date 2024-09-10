// const LastPages = () => {
//   return (
//     <div className=" bg-[#171717]">
//       <div className="w-[90%] m-auto mt-[80px]">
//         <div className="flex justify-between">
//           <img
//             src="/icons/last_book_uz.svg"
//             alt="last_book_uz.svg"
//             className="w-[104px] h-[70px] mt-[40px]"
//           />
//           <h3 className="text-white text-2xl mt-[40px]">Menu </h3>
//           <h3 className="text-white text-2xl mt-[40px]">Kontaktlar </h3>
//           <h3 className="text-white text-2xl mt-[40px]">
//             Ilovani yuklab olish
//           </h3>
//         </div>
//         <div className="flex mt-[16px] justify-between">
//           <div className="h-[361px] relative text-white">
//             <h3 className="text-lg">Kitob - eng yaxshi sovg’a</h3>
//             <p className="mt-[8px] text-sm">
//               Ushbu kitobda muallif haqiqiy <br /> rahbar qanday boʻlishi va
//               qoʻl
//               <br />
//               ostidagilariga qanday
//             </p>
//           </div>
//           <div className="h-[361px] relative text-white text-base mb-[24px]">
//             <div className="h-[361px] relative text-white text-base mb-[24px]">
//               <h3 className=" mb-[24px]">Biz haqimizda</h3>
//               <h3 className=" mb-[24px]">Qanday xarid qilinadi</h3>
//               <h3 className=" mb-[24px]">Yetkazib berish</h3>
//               <h3 className=" mb-[8px]">Filial va dilerlar</h3>
//             </div>
//           </div>
//           <div className="h-[361px] relative text-white text-base mb-[24px]">
//             <img src="/icons/phone-icon.svg" alt="phone-icon" />
//             +998 71 275 64 84
//             <img src="/icons/email-icon.svg" alt="email-icon" />
//             info@book.uz
//             <img src="/icons/location-icon.svg" alt="location-icon" />
//             Chilonzor-8, Qatortol ko'chasi 60
//             <img src="/icons/facebook.svg" alt="facebook" />
//             <img src="/icons/instagram.svg" alt="instagram" />
//             <img src="/icons/telegram.svg" alt="telegram" />
//           </div>
//           <div className="h-[361px] relative text-white"> </div>
//           <div className="h-[361px] relative text-white">
//             <img src="/icons/app-store.svg" alt="app-store" />
//             <img src="/icons/playmarket.svg" alt="playmarket" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LastPages;

const LastPages = () => {
  return (
    <div className="bg-[#171717] h-[361px]">
      <div className="w-[90%] m-auto mt-[80px]">
        <div className="flex justify-between">
          <img
            src="/icons/last_book_uz.svg"
            alt="last_book_uz.svg"
            className="w-[104px] h-[70px] mt-[40px]"
          />
          <h3 className="text-white text-2xl mt-[40px]">Menu</h3>
          <h3 className="text-white text-2xl mt-[40px]">Kontaktlar</h3>
          <div className="text-white text-2xl mt-[40px]">
            Ilovani yuklab olish
          </div>
        </div>

        <div className="flex mt-[16px] justify-between">
          <div className="h-[361px] relative text-white">
            <h3 className="text-lg">Kitob - eng yaxshi sovg’a</h3>
            <p className="mt-[8px] text-sm">
              Ushbu kitobda muallif haqiqiy <br /> rahbar qanday boʻlishi va
              qoʻl
              <br />
              ostidagilariga qanday
            </p>
          </div>
          <div className="h-[361px] relative text-white text-base mb-[24px]">
            <div className="text-white text-base space-y-[24px]">
              <h3>Biz haqimizda</h3>
              <h3>Qanday xarid qilinadi</h3>
              <h3>Yetkazib berish</h3>
              <h3>Filial va dilerlar</h3>
            </div>
          </div>

          <div className="h-[361px] relative text-white text-base mb-[24px]">
            <div className="flex flex-col mb-[8px] space-y-[23px]">
              <div className="flex items-center">
                <img src="/icons/phone-icon.svg" alt="phone-icon" />
                <span className="ml-[8px]">+998 71 275 64 84</span>
              </div>
              <div className="flex items-center">
                <img src="/icons/email-icon.svg" alt="email-icon" />
                <span className="ml-[8px]">info@book.uz</span>
              </div>
              <div className="flex items-center">
                <img src="/icons/location-icon.svg" alt="location-icon" />
                <span className="ml-[8px]">
                  Chilonzor-8, Qatortol ko'chasi 60
                </span>
              </div>
              <div className="flex space-x-[16px] mt-[8px]">
                <img src="/icons/facebook.svg" alt="facebook" />
                <img src="/icons/instagram.svg" alt="instagram" />
                <img src="/icons/telegram.svg" alt="telegram" />
              </div>
            </div>
          </div>

          {/* App Store and Play Store icons */}
          <div className="flex flex-col items-center">
            <img
              src="/icons/app-store.svg"
              alt="app-store"
              className="mb-[16px] h-[55px]"
            />
            <img
              src="/icons/playmarket.svg"
              alt="playmarket"
              className="h-[55px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastPages;
