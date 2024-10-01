// import { Checkbox } from "@/components/ui/checkbox";
// import { useSearchAppParams } from "@/hooks/useRedux/useSearchParams";

// const Language = () => {
//   const { getParams, setParams } = useSearchAppParams();

//   const normal_text =
//     "flex items-center space-x-2 h-[48px] mt-[7px] cursor-pointer";

//   const active_text =
//     "flex items-center space-x-2 h-[48px] mt-[7px] cursor-pointer";

//   const selectedSize = getParams("language") ?? "default";

//   return (
//     <div className="p-4 bg-[#f6f6f6]">
//       <div className="flex items-center space-x-2 h-[52px]">
//         <Checkbox id="all-languages" />
//         <label
//           htmlFor="all-languages"
//           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//         >
//           Barcha tilldagi kitoblar
//         </label>
//       </div>

//       <div className="flex items-center space-x-2 h-[48px]">
//         <Checkbox id={"uz"} />
//         <label
//           htmlFor={"uz"}
//           className={selectedSize === "uz" ? active_text : normal_text}
//           onClick={() => {
//             setParams({ language: "uz" });
//           }}
//         >
//           O'zbekcha
//         </label>
//       </div>
//       <div className="flex items-center space-x-2 h-[48px]">
//         <Checkbox id={"ru"} />
//         <label
//           htmlFor={"ru"}
//           className={selectedSize === "ru" ? active_text : normal_text}
//           onClick={() => {
//             setParams({ language: "ru" });
//           }}
//         >
//           Ruscha
//         </label>
//       </div>
//       <div className="flex items-center space-x-2 h-[48px]">
//         <Checkbox id={"en"} />
//         <label
//           htmlFor={"en"}
//           className={selectedSize === "en" ? active_text : normal_text}
//           onClick={() => {
//             setParams({ language: "en" });
//           }}
//         >
//           Inglizcha
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Language;

// import { Checkbox } from "@/components/ui/checkbox";
// import { useSearchAppParams } from "@/hooks/useRedux/useSearchParams";

// const Language = () => {
//   const { getParams, setParams } = useSearchAppParams();

//   const normal_text =
//     "flex items-center space-x-2 h-[48px] mt-[7px] cursor-pointer";

//   const active_text =
//     "flex items-center space-x-2 h-[48px] mt-[7px] cursor-pointer";

//   const selectedLanguage = getParams("language") ?? "default";

//   const handleLanguageChange = (language: string) => {
//     // 현재 모든 파라미터 가져오기
//     const allParams = getParams();

//     // 기존의 쿼리 파라미터들을 유지하면서 language 파라미터만 업데이트
//     setParams({
//       ...allParams, // 기존 파라미터 유지
//       language, // 선택한 언어 업데이트
//     });
//   };

//   return (
//     <div className="p-4 bg-[#f6f6f6]">
//       <div className="flex items-center space-x-2 h-[52px]">
//         <Checkbox id="all-languages" />
//         <label
//           htmlFor="all-languages"
//           className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//         >
//           Barcha tilldagi kitoblar
//         </label>
//       </div>

//       <div className="flex items-center space-x-2 h-[48px]">
//         <Checkbox id={"uz"} />
//         <label
//           htmlFor={"uz"}
//           className={selectedLanguage === "uz" ? active_text : normal_text}
//           onClick={() => handleLanguageChange("uz")}
//         >
//           O'zbekcha
//         </label>
//       </div>
//       <div className="flex items-center space-x-2 h-[48px]">
//         <Checkbox id={"ru"} />
//         <label
//           htmlFor={"ru"}
//           className={selectedLanguage === "ru" ? active_text : normal_text}
//           onClick={() => handleLanguageChange("ru")}
//         >
//           Ruscha
//         </label>
//       </div>
//       <div className="flex items-center space-x-2 h-[48px]">
//         <Checkbox id={"en"} />
//         <label
//           htmlFor={"en"}
//           className={selectedLanguage === "en" ? active_text : normal_text}
//           onClick={() => handleLanguageChange("en")}
//         >
//           Inglizcha
//         </label>
//       </div>
//     </div>
//   );
// };

// export default Language;

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
		getParams("language")?.split(",") || [], // 쿼리에서 언어 값 읽어오기
	);
	const [allLanguagesSelected, setAllLanguagesSelected] = useState(
		selectedLanguages.length === 3, // 모든 언어가 선택되었는지 여부 확인
	);

	// 모든 언어 선택/해제 처리
	const handleAllLanguagesChange = () => {
		if (allLanguagesSelected) {
			setSelectedLanguages([]); // 모든 언어 선택 해제
			setParams({ language: "" }); // 쿼리에서 언어 제거
		} else {
			const allLangs = ["uz", "ru", "en"];
			setSelectedLanguages(allLangs); // 모든 언어 선택
			setParams({
				language: allLangs.join(","),
				"all-language": "all-language",
			});
		}
		setAllLanguagesSelected(!allLanguagesSelected);
	};

	// 개별 언어 선택/해제 처리
	const handleLanguageChange = (language: string) => {
		let updatedLanguages = [...selectedLanguages];

		if (updatedLanguages.includes(language)) {
			// 이미 선택된 언어는 제거
			updatedLanguages = updatedLanguages.filter((lang) => lang !== language);
		} else {
			// 선택되지 않은 언어는 추가
			updatedLanguages.push(language);
		}

		setSelectedLanguages(updatedLanguages);
		setParams({ language: updatedLanguages.join(",") });
	};

	// 언어 선택 상태를 쿼리에서 읽어와서 적용
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
