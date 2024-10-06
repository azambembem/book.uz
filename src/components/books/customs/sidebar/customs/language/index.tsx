import { Checkbox } from "@/components/ui/checkbox";
import { useSearchAppParams } from "@/hooks/useRedux/useSearchParams";
import { useEffect, useState } from "react";

const Language = () => {
  const { getParams, setParams } = useSearchAppParams();

  const normal_text =
    "flex items-center space-x-2 h-[48px] mt-[7px] cursor-pointer";
  const active_text =
    "flex items-center space-x-2 h-[48px] mt-[7px] cursor-pointer";

  const [selectedLanguages, setSelectedLanguages] = useState<string[]>(
    getParams("language")?.split(",") || []
  );
  const [allLanguagesSelected, setAllLanguagesSelected] = useState(
    selectedLanguages.length === 3
  );

  const handleAllLanguagesChange = () => {
    if (allLanguagesSelected) {
      setSelectedLanguages([]);
      setParams({ language: "" });
    } else {
      const allLangs = ["uz", "ru", "en"];
      setSelectedLanguages(allLangs);
      setParams({
        language: allLangs.join(","),
        "all-language": "all-language"
      });
    }
    setAllLanguagesSelected(!allLanguagesSelected);
  };

  const handleLanguageChange = (language: string) => {
    let updatedLanguages = [...selectedLanguages];

    if (updatedLanguages.includes(language)) {
      updatedLanguages = updatedLanguages.filter((lang) => lang !== language);
    } else {
      updatedLanguages.push(language);
    }

    setSelectedLanguages(updatedLanguages);
    setParams({ language: updatedLanguages.join(",") });
  };

  useEffect(() => {
    const currentLanguages = getParams("language")?.split(",") || [];
    setSelectedLanguages(currentLanguages);
  }, [getParams]);

  return (
    <div className="p-4 bg-[#f6f6f6]">
      <div className="flex items-center space-x-2 h-[52px]">
        <Checkbox
          id="all-languages"
          checked={allLanguagesSelected}
          onCheckedChange={handleAllLanguagesChange}
        />
        <label
          htmlFor="all-languages"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Barcha tilldagi kitoblar
        </label>
      </div>

      <div className="flex items-center space-x-2 h-[48px]">
        <Checkbox
          id={"uz"}
          checked={selectedLanguages.includes("uz")}
          onCheckedChange={() => handleLanguageChange("uz")}
        />
        <label
          htmlFor={"uz"}
          className={
            selectedLanguages.includes("uz") ? active_text : normal_text
          }
        >
          O'zbekcha
        </label>
      </div>
      <div className="flex items-center space-x-2 h-[48px]">
        <Checkbox
          id={"ru"}
          checked={selectedLanguages.includes("ru")}
          onCheckedChange={() => handleLanguageChange("ru")}
        />
        <label
          htmlFor={"ru"}
          className={
            selectedLanguages.includes("ru") ? active_text : normal_text
          }
        >
          Ruscha
        </label>
      </div>
      <div className="flex items-center space-x-2 h-[48px]">
        <Checkbox
          id={"en"}
          checked={selectedLanguages.includes("en")}
          onCheckedChange={() => handleLanguageChange("en")}
        />
        <label
          htmlFor={"en"}
          className={
            selectedLanguages.includes("en") ? active_text : normal_text
          }
        >
          Inglizcha
        </label>
      </div>
    </div>
  );
};

export default Language;
