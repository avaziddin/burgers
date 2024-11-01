"use client";

import Image from "next/image";

type Props = {
  item: any;
  lang: any;
};

const CategoryReload: React.FC<Props> = ({ item, lang }) => {
  
  /* const handleClick = () => {


    console.log("Clicked category:", item.titles.en);
    const newFilteredData = alldata.filter(
      (product: { category: string }) => product.category === item.titles.en
    );

    setDataC(newFilteredData);

    setLanguageData({
      ru: item.titles.ru,
      en: item.titles.en,
    });
  }; */

  return (
    <li
      /* onClick={handleClick} */
      className={`xs:text-[13px] bg-white sm:text-[14px] md:text-[14px] lg:text-[18px] flex whitespace-nowrap overflow-hidden min-w-fit gap-[5px] justify-center xs:pt-[2px] xs:pb-[2px] xs:p-[5px] sm:pt-[7px] sm:pb-[7px] sm:p-[10px] xs:rounded-[10px] sm:rounded-[15px] text-black items-center `}>
      <Image className="xs:p-[2%] sm:p-[0] rounded-md  object-cover" src={item.images || ""} alt="burger" width={25} height={25} />
      {item.titles[lang]}
    </li>
  );
};

export default CategoryReload;
