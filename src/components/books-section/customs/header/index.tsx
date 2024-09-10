import { Toggle } from "@/components/ui/toggle";

const Header = () => {
  return (
    <div className="flex gap-6">
      <Toggle>Bestseller</Toggle>
      <Toggle>To'p kitoblar</Toggle>
      <Toggle>Yangi kitoblar</Toggle>
      <Toggle>Chegirma</Toggle>
    </div>
  );
};

export default Header;
