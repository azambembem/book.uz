import Card from "./customs/card";
import { useSearchAppParams } from "@/hooks/useRedux/useSearchParams";
import { useBodyFeatures } from "./features";

const Body = () => {
  const { getParams } = useSearchAppParams();
  const {
    books: { data: books }
  } = useBodyFeatures();
  // const [get] = useSearchParams();

  const cols = getParams("cols") ?? "3";
  return (
    <div className={`grid grid-cols-${cols} gap-6 my-6`}>
      {books?.map(() => (
        <Card />
      ))}
      {/* <Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card /> */}
    </div>
  );
};

export default Body;
