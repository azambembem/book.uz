import { useSearchParams } from "react-router-dom";
import Card from "./customs/card";

const Body = () => {
  const [get] = useSearchParams();

  const cols = get.get("cols") ?? "3";
  return (
    <div className={`grid grid-cols-${cols} gap-6 my-6`}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Body;
