import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import type { FC } from "react";
import { v4 } from "uuid";
import { Button } from "../../../ui/button";
import { Skeleton } from "../../../ui/skeleton";
import { useFlayerFeatures } from "./feature";

const Flayer: FC = () => {
  const {
    genres: { isLoading, isError, data: genres }
  } = useFlayerFeatures();

  const loading = isLoading || isError;

  return (
    <div className="w-[90%] m-auto mt-4">
      <div className="flex gap-4 h-[488px] mt-4">
        <div className="w-[287px] bg-[#f5f5f5] p-4 rounded-sm flex flex-col gap-2 items-start h-[488px] overflow-x-auto">
          {loading
            ? Array.from({ length: 10 }).map(() => (
                <Skeleton className="w-full h-10 bg-[#c1c1c1]" key={v4()} />
              ))
            : genres?.map((genre) => (
                <Button key={genre?._id} variant={"link"}>
                  {genre?.name}
                </Button>
              ))}
        </div>
        <div className="w-full rounded-sm flex justify-end">
          <Carousel className="w-[95%] h-[488px]">
            <CarouselContent>
              <CarouselItem>
                <img
                  alt="random-img"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Gutenberg_Bible%2C_Lenox_Copy%2C_New_York_Public_Library%2C_2009._Pic_01.jpg"
                  className="w-full h-[488px] rounded-[8px]"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="random-img"
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhURExMVFhUVFxUVFhcVGBcVGRUVGBUYGBcXFxcYHiggGBolGxUVIjEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFxAQGyslICUtKy4tLS0vLS0tLS0rLi0tLSstLS0tLS0tLS0tLi0tLSstLS8tLS0tLS0rLTU2NzM0Lf/AABEIALcBEwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwQBAgUGBwj/xABJEAABAwEEBQcJBAcHBQEAAAABAAIRAwQSITEFBkFRYRMiMnGBkaFCUnKSscHR4fAHFGKyI0NTgqLC0hUWM0Sj0/EkY4OTw1T/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAAtEQEBAAIBAwIEAwkAAAAAAAAAAQIREgMhMUFRBBMikRQy8CNCUmFxgbHB4f/aAAwDAQACEQMRAD8A+GoiICyAgGxdWyWIAG8RePNEQSDElmOAedh69qDklFl+Z96wgIiICIiAiKSjRLjA+QG0k7AgjRWjTpee7D8IN7qxw7VHaKF2CDLT0XDb8DwQQoiICIiAiIgIiICzG1WbHYy/HyZjOC4+a2czCk0mxoLS3IgkRg2MgAM5G2dqCiiIgIiICIiAiK02ztaAahILsgBJA84zs4IKqK0bMCDcdeIxIiJG9uOKqoCIiAiK/RszmAVBMzEwCJ3EZnrhBJZqApwXNDiXXfOgxN2MrxkY4wmkrYZuNccBDsZmcwdhIMi8o7TbBduNaGnGdt2ekG8DHuVBAREQEREBERAV4gAU2DBr7pc7aTegjqG7tVFW2jlGho6bRAHnCScPxYnrQdrSGjaQpOIaAWiQdsjfvlcujZnsaTUEU3DbE3o5t0Zh3umVPoysLrn1XOLWQGtJJF7q2kR2KhbrY6q68ctg2AfFBWREQEREBERAVyzWEuIOF0xti9vA44HuUVlsxeYHZESTntXYpYWcPLZNFz2ZAENcALro2SXYjInrUt0sRNtTW07wF3ZAwknO7tDmg9Lb3Lk1qznGXGSlaqXGTA4DAAbAFGqgiIgIiICIiCzYgOc6JLW3gDlmMTvgYwuvoeyMqNNR/PcSZnYuNZaoaSDMOF0xmAYxHcp6DHse1rXEB5EObMOBMT9ZIJbRo9wquFEEhsGQeiSJiSqtvi9hEwL13K9tjw8V0dJ6QDRyVLLynb9+O07yuKgIiICtNtrg0gYF2ZnvIGwnaqqICIiDZjZ69g3/ADWqKTpel+b5+3rzCNERARFKeb6X5fmgjc2MEBWEQS17Q5/SJMfXeokRBs5sdS1WzXdy3p2dznBrAXFxhoaJJO6BtQRIu3q/VoMqOoWykeTebrnxdqUHTF4cBtafkbmtOplayfpGnlqDsWVWYi6cReAy68lm5yXVa42zceYWQEAUhN3AZ7Tu4D4rTLNCtdO3AzgYIPWO5d3V60mq6tTfk9mA2CDEAdTiexecXR1frXbRTO83fWBb7SFjqTeNaxuq55CwrWlKd2tUH4j3EyPaqq1LubZbObHUtVs13cjmx1KjVERAWzW7diyxu05fWAWHunq2BBqpqdpe0FocQD9GNyhRAREQEREBERAREQEREEnS9L83z9vXnpCwrP5/r+L6zQR9H0vy/NRIiAiIgIiIC62h9H2oj7xZ6b33DiaXPcw7y1suaM8SIOOa5QK+kaktsFpezk61XR1tGDXU3XqNRx3NeZxP6suAOQlZyuouMdDQ9ax6XbyNqDaVsaIDwLpqRu2yNrTMcQurojRlq0d/09cGvY3GA4YmjP8ALwwO4Zr2TdW+WEW6hZ6tRsXLTRBpvMYhxyfTfPmucMNmS6lVpY2ILxEbzHHevFlfSePvHpnfy+Qa4fZ62HV7JAnEt8kDbl0esYejmfl9ps7qbix7S1wzBwX6PquY0zSdcPmHon93Z+73FeT1o1bo2tvNaKdUZNEZ5nkzgD6Bjqbmr0+tce17z9fr3TPpy+HxdbU3lpDhmCCOsK1pTRz6Dyx46jsP1u2KmvbLLNx57LHY1qpgWgkZPa1w7cPcuOu7rEJpWapvphpPFob8SuEsdL8sXLyLZru5aoujLZzY6lljdpy+sAs0uOW35cVIaD3dFriNkAn6KCF7p6tgWqs/2fV/ZVPUd8E+4Vf2b/Vd8FNxdVWRb1KZaS1wIIzBEEdhWiqCIiAiIgIiICIiAiKXo+l+X5oHR9L8vzUSIgk6Xpfm+ft6840UvS9L83z9vXmESIiAiIg9HqfpSx0TUFrs5qh4Aa8BrzS4im/AzvmcMF6+x6u6Ltf+BabPfJgU6nKWZ5O4C9BPUCvOWCx0wGitoi1OMAF1N9ZhOHSuuY4SewLtWXQmi34OoaRoE4S9l9o6i3neC8+Vm99/1/d2x3Jrt9v+PoejrdbbDT5KoBXYOiXvdeaN19zBI65Ve0a90nYOpvpu/A9lT2QVz7DQfY6cWbSAdTjClXcDGWTajZb1CBwXm9OaRqVZ5Sz2WofOBY098rh+bs6+Hc0hp8PyLagOx3Md371wrRpktOZH4amHqvyK82+yOxu0qjOFOo14PZeUT6temMZLd1VhYI3EkXVqdCelZvUek0jVpW1hY/CoN+DjGR4nj2Hh89ttkdTddd2HeJInvBBGwgjYuvy7XERNJ+bceaT+E+T2SF3NGWZtsBsteGVXY0nnC7UgBpO9roa137h2Y9cP2fnwxl9fhwrUC6wUj5jz3EvHwXBXpHWZ7LPVs9RpbUY4tLTmHBwMcc/FUWXLPEgPrbs20zs63ezxWsMtbn86zcd6aWTQz3C88im3OXZkbw33mArIFlp+SakbXEnHcGtgeJUFSy2irz3ghu95DB2XiJ61obAPKrUmjcHF8eqFrVvm/Y7TxFk6fLf8Om1g/CGt8WgHxUR09WO3DtP5iVoLLRH61h678eDUNAeTUoeP8wKcMPY5ZM/f6xye4g+bh7Fita3N6RcXbJJ7zKchUP6xrhuD4HwUFTRtQZCRwIPvVkxS2qhM4lYU5sjxm0qBbYEREBERARFJRolxgdZJyA2knYEEaK8Mop077R0nFpN49YxaN0LQXamENa/yYwDvwmcjuKCux8de/ctFlwjA5hYQEREBERBlzpxKwiICsWYFpbVMgBwIIMEkEE3TBg8YKksNjLucQbuzZedsaCcBO9e00DouzXC60ta4QGU2Fz280YkuLIIAdkR0okzgplZJ3WTdZsX2ihnSbaqh/wC5XoHx+7Se9dBv2i2arzXaNc7eWvYT3NpCVZa2xN6FGg2NoaSe8tJWX2ihGTewPHsaAvNeF9Hecp6qdXT9iONLRbrx891Kmfyklc+06VcejZhT4mpWI9ZrAPFdl1ekRGY4ifatQW7G9zGjxvJ9Psary1evVJwkdTs+q9WBPctB94GTn+q331CvWyTteOoN94K1+7uPndzfcxXlInF5OrTqH/EpNfOZaLru2AWntSzgggNJwMtvdJh3fib1En2L05p9Z7B7mpUaym01agEDJsSSSMAAcydg7ck5b7LrXdS09XfXeyoBde6mGvcAJkYTuLogA4CMcguZT0W5nQlu8sAc89dR8EfuthVnaz1RXvPYA3zDeZdZsDRMN7sStNJacqggllNzHAFph2W7pYHhxC1Onlj4Z5Y1LW0HOJbVd6Tz/tlV36HYM2kf+Vv87Aq7dMt20nD0KtVvvhWKWmWftLS3tZUA9YBa+pNYq79Eg9Ev9VlQd9NxPgqj7C8GAWOO7AO9VwB8F2hpBrv8xScf+9RLf4myFM15dhdpPB/Z1mn/AE6uHgnKxOLy9SW4OZB4gjwWW2kgQB4n4r1L7IIxp1WDiwlv8N5g7lSqaJpvJulpP4TB7sfYFZnE4Vwxa37HKEldOvoR4y8R7xIXP5F165BLsoGPsW5ZfDNlnlrTYXEACScgEeIMTK7FlsrWCTiXCDLg0OnpNbMFrhG3qXKtTgXkggicIF3DZhsVREiIgK1RP6J+zFnbngfb2KqpbPWunKQcHNORH1tQeg0Vb6QpAFwaW5g7943qlaNHth1aoSwFxLWgYwcs8id2xV7KxjHirILBjBIvTGDbu+duW1QW62OquvO7BsAQR2mtfcXRExxwAgY7clEiICIiAiIgKxZaEy4glrcSBE/IcVHRbJ7CY3wJhdC0sFOHscIzaQLpJ2iIxb1oLzLbyB51NpDejeAJcQBzDOBYCTjHipv74VSZdBO8sp+5q81Vqlxk/wDA3DcFos3GXy3jnZ4erbrU/wDB6jP6Vq/WarscwdTWf0ryyy1Thi1OrXtW2+2OY1zJgiZmmM/3VTtFqt37SOp3wC62ih+gp+g32Lm6Trw6JXOa9nW2+6o2tbCRNd4G2HGY24YT3rpaxauW2zUqdWvVrxUMNa7M829OFQiIjbOITVuly1po0p6b2g9U4+AK9t9vVpirZKYODaVR3rOaP5PFPVnb5VRp1bzTfcecMC7PHLMq9Y7Q4VS2rUvNBeGlxJgk58JhcqpV4qU1OU2gVOMAP9wd7VuM12rbZBXLWsLTdJLn9IAbhsJPuXItlkgGmxwdLgS4naARA7zipq2kbtNtFhGA57htO0A+9UmvWt1jSMaPfw71n+zn/h71Za5StU5U4xQ/s5/DvC1+41N3iF1IWCFOVXjFClTrMxaXN9Ex7CrQ0lahgXOcPxgP/NK3IWhCefRe/us0NPVhANNp/dLfykBXLXbm1GOBoxVF1t4Ou584tOB5kCZkSqlnswcCARegEAjpb8dgG9ce0Wp0Fgdzcp3jO7O1oMwrMZtLlUmkLZe5oMjAuMRedvjZGW/BUURbcxERAREQEREG9MA4HDcfitXNjArCla6cD2H3HggiRZc2MCsICyECkJu+l7OA4oNCCDxCPeTiVqiAiIgkY0HDbs48Fmg0XgHG6MQSZMYbQMc1vYemDAMXnQcjdaXY9y+haI0FVtVNzmCkSx1yXsaS6AJN4g4rj1etj059Tr0+nyct2mLO2jTFNxvNpsa8ERLg0BxEcQc4XnLVbr7iV7erqZWGbaXYG/0rDNUquylQPW1n9K88+K6Xu73p2uP9nVra230XPcA0EmTkDGHtXqPtztbX17NUY9rm8i5stIPODyYw4OCps1Vrj/L2c/us+Sjras1ndKyUT3j2PCv4np73s+X2fOy5ayvoJ1eqN/yFH/UP/wBlCNB1P/xUfVf/ALq3+K6fuz8q+7wl5ZFReot+iWg3bjKbvKwvRuABy7yqDtEt8/8AgAXbHOWbc8sOPq5wrRjs+sCp6drbvVgaNpjynHhgFo/R1MYy4js+CvZjuyLYzes/fGb1AbLT4960NFm7xU1F3Vn70zesmuyJkcPrcqbw1om6DuG/r4Ko+oSZV4pcnUNrEReEfXwXIWZSVqTTNu2ERFUEREBERAREQEREErXTgew+48FoWkGNqwFYDo5pPOyB83h89iCMm76W3hwHFRLLmxgVhAREQEREFqwEXjPmu+u6V92+zah/0YPnPqH+Ij3L4tqvow2ivyUgcyo4k4QAwyezPsX3PVuxWixWZtB9B1QtLjeplsEEk5TO1eH43C5SSPT0PDsVbMDulRixhUK+sTWGH0agI2c2fEqoddKMwadcbuYT4hfPnw2f8L0W69XbNAILOPorknWej5tXspud7AtKmttlb0nVGn8VKo38zQl+G6k/dv2SZy+LPu6zrG0/8qN2jWrmUtcrE7o2hvaWj2q5Q03Z35V2dhn2Lnl0spfy37NyV8q1zcGWyszHAtH+m1cF1dd/7TLv3vlqTw9tRrZu5h7RdII3EBp715EF5ya7uX2ujPox/o8fUlmVW3VlHyygNOp5pWhpVN3iPiusjmlqu2zh9YFQOqbT2Df8luyi4YmMdk5qOpZznIx+oVRE98qNT8hxCwaPHwVRCiyQsKoIiICIiAiIgIiICyAgCk6OA6W3hwHFAJu+ltO7gOKiWbp3LYUnbig2a6cD2H3Hgo3NjAqZtkefJKss0fUcILTwMeB4K6HPRdJuhKx8g9ysU9XKx8kpxo4qL0dPVOsfJKs09Tqu5XhU3GPs1cBbMdtKr4Nk+AK/TBavgerer9azVm2hrGuLQ4AOmOc0tORzgnvX0bRusVsdTqv5Km7kXNY5t4tJvNBEbNo71w63Tu5XfpW2XXp3/wARPr9owuYKzRi0QY2tXjtE6BqVnSZazftPUu/a9fBBZXslVuwlpa+OF3Bw7k0brlYIA5Xk+FVrme0Lhccp4d968uh/dWgWgXSCB0g5wJ68V4HXXRlKhWa3F7iwOJfBIEkNEx+E96+oWbS1CoJp1qThwcF86+1lrRWo1Q5suYWEBwnmuJbImcbxx4LOEyl1ds5XGzbyvKNGQA6gFE+sFzTb2rR9vG4rvwrnyi86qoalVUH2/goX27grMKlzi7UqqFz9p7Bv+SqG0HM9g3/JROLjjj3LcxYuSw+stBXUPJu3HuKck7zT3FXSbSOdt2fWB4rF5YZTcPJMbRCy6zuzgx9YFXRtCVhdzQurb7SDyZgtxIc0iRMSDkcQQrtTUS0jzT2rfGs7eWRehfqbah5Le9QP1XtQ/V9xCnGm3FRdQ6vWn9k7vHxRONFlmrbzvVinqq4719RpaMG5WqejhuXTjEfLqWp5O9dCyajXsYyjjJOQ+a+mUdHg4K9yAGzswwG7iOKag+X0NSmjZ8upW6OpDPNX0VlmG5TNs4V7DwNHUun5qvUtUaY8kL2raAUgohNo8jS1XpjyQrdPV1g8kL0zaS3FNNmnnmaDZ5oUzNDt3LuimtxTTZpxmaJG7wUrdGt3LsmzkYrAYpscsaPG5Q6q0gLRbqceXZ399FseLF3BTXHJNltNW0PaTSrNpNL248maYcOeNjTOa5dbvi79DzZ7z/cWdadVqVrYceTqZCo0AmNxG3hOS+WnV+m2WurVHbDzgAexoC+107Q1zQ5pBByIxXyDWkclaqzfxuIx2O5w8HLy7dpllO23MGgbK0yA6d4fUHsKV9H2cmXNLiBEuc9xjdJPEqrUtg3qrVto4Lct92Lq+U9Sw2Yfq29sn2lValnoDKlT9UKtUtgVR9qkwNuGOHtV71ncXLtOQGsZJMDmtGJWlsuswgbcYAmM8M4nbtWaVQMbMgzJnAB2YDHXsmk4h2R7lx7bb75BxwES7pHrIzjetaTa0+1KF1pVB1ZRmqrpNrrrQo3V1TNRamorpNrZrLBrKpfWLyaTb2WhtdBZ6DKNybt7HfeeXe9XGa9PfN2kTGcYrwtCleOcACXE7B7zjkr9msbqw5nMptOE5l28xmeOzJdJnWdPSVdd6gxNIgHKQRKgdry79mF5qo59N7mVOcPKBMzuIJ28VBaaV0iDIIvNPCSMRvkFOdTT1H99neYEXkkV500/RjAp2QiLarWzHs6iMI4ZrZEUG7SpAUREbhy2DkRBsHLYOREGwctg/wCu3/hEQTtrF2HeVh7xkERQBUVyxuBBBEhEUy8NRxLboB1ImpZH8ntdSONN3UPIPV3L5rrI23V7S8iybhhVpYwAJxcMMERc50scu9dMutlI41fVXST8rKG9dSl7nqs/UjSh/Vs/9jPiiLpOljHK9S1qfs90kcxSH749ynoai21gB/R7b3OGcG6J8ye1EV4ROVcW1aqWwfo2sluEuvMl0DCZdkNgUTNSraf1Y9dnxRFflxOVb/3DtvmN9dq1dqNbBm1vrhEV+XF5In6nWoeQ312qvU1btAzYPWb8VhFPlw5I/wCwq/mfxN+K3bq7aD5A9ZvxRE4Q5Oho/VS0G8LrcWEReGJwI7onsXa0Lq1XY264AiZHOAhEV4RNuu7UlompVAc92AGYaBs+aqnUlhMux9gGwAbAiKzGCQakUtyIiuoP/9k="
                  className="w-full h-[488px] rounded-[8px]"
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  alt="random-img"
                  src="https://st2.depositphotos.com/1105977/5461/i/450/depositphotos_54615585-stock-photo-old-books-on-wooden-table.jpg"
                  className="w-full h-[488px] rounded-[8px]"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
      <div className="grid grid-cols-4 mt-4 gap-[24px]">
        <div className="h-[202px] px-[26px] py-4 bg-[#107FE41A] rounded-[8px]">
          <img src="/icons/fast_deliver.svg" alt="fast_deliver" />
          <h3 className="mt-4 text-[#107FE4] font-semibold">Yetkazib berish</h3>
          <p className="text-sm text-[#107FE4] mt-2">
            Buyurtmangizni O’zbekiston bo’ylab yetkazib beramiz
          </p>
        </div>
        <div className="h-[202px] px-[26px] py-4 bg-[#107FE41A] rounded-[8px]">
          <img src="/icons/book.svg" alt="book" />
          <h3 className="mt-4 text-[#107FE4] font-semibold">Keng tanlovh</h3>
          <p className="text-sm text-[#107FE4] mt-2">
            Istalgan turdagi kitoblarni topishingiz mumkin
          </p>
        </div>
        <div className="h-[202px] px-[26px] py-4 bg-[#107FE41A] rounded-[8px]">
          <img src="/icons/credit_card.svg" alt="credit_card" />
          <h3 className="mt-4 text-[#107FE4] font-semibold">Oson to'lov</h3>
          <p className="text-sm text-[#107FE4] mt-2">
            Istalgan turdagi to‘lov asosida xarid qilishingiz mumkin
          </p>
        </div>
        <div className="h-[202px] px-[26px] py-4 bg-[#107FE41A] rounded-[8px]">
          <img src="/icons/guarantee.svg" alt="guarantee" />
          <h3 className="mt-4 text-[#107FE4] font-semibold">
            Himoyalangan tizim
          </h3>
          <p className="text-sm text-[#107FE4] mt-2">
            Sizning xavfsizligingiz uchun barcha ishlarni qilganmiz
          </p>
        </div>
      </div>
    </div>
  );
};

export default Flayer;
