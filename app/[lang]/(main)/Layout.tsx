import CategoryReload from '@/components/CategoryReload';
import { Category } from '@/models/category';
import Image from 'next/image';

interface LayoutProps {
  children: React.ReactNode;
  translation: any;
  lang: any;
}

const Layout = async ({ children, translation, lang }: LayoutProps) => {

  const res = await fetch("http://localhost:3000/api/category", { cache: "no-cache" });
  const { data } = await res.json();

  return (
    <div className='bg-gray-100 text-black'>
      <header className='mb-20'>

        <div className='bg-background w-full rounded-b-[70%] h-[486px] pt-5 flex flex-col gap-10 mb-14'>
          <div className='flex justify-center '><h1 className='text-[35px] text-white'>YourMeal</h1> <Image src="/images/loshka.svg" alt="loshka" width={30} height={30} />  </div>
          <div className='w-full flex justify-center'>
            <Image src="/images/burger.svg" alt="loshka" width={326} height={30} />
            <div className='text-[60px] font-bold'>
              <h1 className='text-white'>{translation.title.title_title}<p className='text-orange-600'>{translation.title.title_two}</p> </h1>
              <span className='text-[17px] text-white font-mono'>{translation.title.free}</span>
            </div>
          </div>
        </div>

        <ul className=" flex xs:gap-[3%] xs:mb-[10px] sm:gap-[2%] sm:mb-[10px] lg:mb-[0] md:gap-[3%] lg:gap-[2%] scrollbar-hidden pr-[5%] pl-[5%] overflow-x-auto ">
         {/*  <AllButtonCategory lang={lang} translation={translation} /> */}
          {data.map((item: Category) => {
            return <CategoryReload item={item} lang={lang} />
          })}
        </ul>

      </header>


      <div className='flex gap-10 px-5 w-full mb-10'>

        <aside className='w-[24%] h-[500px] py-5 px-3 bg-white rounded-[30px] sticky'>

          <div className='flex justify-between items-center mb-2'><h1 className='text-[35px]'>Корзина</h1> <div className='w-[40px] h-[29px] bg-gray-300 flex justify-center items-center'>4</div></div>
          <hr className='mb-5' />
          <div>

            <div className='flex flex-col gap-5 mb-5'>
              <div className='flex items-center justify-between '>
                <div className='flex gap-2'>
                  <div><Image src="/images/super.svg" alt="hello" width={90} height={5} /></div>
                  <div className='flex flex-col justify-between'>
                    <div className='flex flex-col'>
                      <span>Супер сырный</span>
                      <span className='text-gray-200'>512г</span>
                    </div>
                    <span>550₽</span>
                  </div>
                </div>
                <div className='flex w-[90px] h-[40px] bg-gray-100 rounded-[15px] text-[18px] items-center justify-around '>
                  <span>-</span>
                  <span>1</span>
                  <span>+</span>
                </div>
              </div>
              <hr />
            </div>

          </div>
          <div className='flex justify-between mb-5'>
            <h1>Итого</h1>
            <h1>1279₽</h1>
          </div>
          <button className='w-full h-[40px] rounded-[12px] bg-orange-500  text-white mb-3'>Оформить заказ</button>

          <div className='flex items-center gap-3'><Image src="/images/dostavka.svg" alt="hello" width={35} height={35} /> <h1>Бесплатная доставка</h1></div>
        </aside>


        <main className='w-[76%]'>
          <h1 className='text-[50px]'>{translation.main.main_text}</h1>
          {children}
        </main>


      </div>


      <footer className='bg-white w-full px-8 h-[250px] pt-10 flex flex-col justify-between pb-10'>
        <div className='flex justify-between items-center'>
          <Image src="/images/futertitle.svg" alt="hello" width={270} height={100} />
          <div className='flex flex-col gap-3'>
            <h1>{translation.footer.number}</h1>
            <Image src="/images/futernumber.svg" alt="hello" width={170} height={100} />
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-xl'>{translation.footer.mi}</h1>
            <div className='flex gap-4'>
              <Image src="/images/telegram.svg" alt="hello" width={35} height={100} />
              <Image src="/images/odno.svg" alt="hello" width={35} height={100} />
            </div>
          </div>

        </div>
        <Image src="/images/2022.svg" alt="hello" width={100} height={10} />
      </footer>
    </div>
  )
}

export default Layout;

