import React from 'react';
import { getDictionary } from '@/app/[lang]/dictionaries';
import { Menu } from '@/models/menu';
import POST_dashboard from '@/components/POST_dashboard';
import PRODUCT_dashboard from '@/components/PRODUCT_dashboard';

interface PageProps {
  params: { lang: string };
}

export default async function Page({ params: { lang } }: PageProps) {
  const translation = await getDictionary(lang);

  const res = await fetch("http://localhost:3000/api/menu", { cache: "no-cache" })

  
  

  const { data } = await res.json()
  return (
    <>
      <div className="w-full bg-blue-950">


          <POST_dashboard button={
            <button className='text-white p-[5px] pr-[10px] pl-[10px] absolute top-[1%] right-[1%] active:scale-[.9] transition-[.2s] active:bg-blue-800  bg-blue-600 rounded-[15px]'>
            Add product
         </button>
          } />
        
        <div className=" pt-[5%] p-[1%]">
          {data.map((item: Menu) => {
            return <PRODUCT_dashboard item={item} />
          })}
        </div>

      </div>
    </>
  );
};
