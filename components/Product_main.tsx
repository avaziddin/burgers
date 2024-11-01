import Image from "@/node_modules/next/image";
import Modal from "./hoc/modal";

type Props = {
    item: any;
    lang: any;
};

const Product_main: React.FC<Props> = ({ item, lang }) => {

    return (

        <>
            <div className="flex flex-col justify-between p-3 w-[30%] bg-white rounded-[15px]">
                <div className="flex flex-col gap-3">
                    <Image className="h-[30vh] w-full object-cover rounded-xl" src={item.images || ""} alt="super" width={290} height={10} />
                    <span>{item.price}₽</span>
                    <span>{item.titles[lang]}</span>
                </div>


                <div className="flex flex-col gap-2">
                    <span className="text-gray-300">{item.weight}</span>

                    <Modal Button={<button className="rounded-[13px] w-full bg-gray-100 h-[40px]">Добавить</button>}>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-[40px] font-bold ">{item.titles[lang]}</h1>
                            <div className="flex gap-5 overflow-hidden">
                                <Image className="h-[37vh] object-cover rounded-xl" src={item.images || ""} alt="super" width={320} height={10} />
                                <div className="w-[60%]">
                                    <p className="mb-[10px] break-words">{item.description[lang]}</p>
                                    <h1 className="font-semibold">Состав:</h1>
                                    <p className="break-words">{item.composition[lang]}</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center">
                                <button className="w-[276px] bg-orange-500 p-3 rounded-xl text-white">Добавить</button>
                                <div className="bg-gray-200 px-3 py-2 rounded-xl flex gap-4"><span>-</span> <span>1</span> <span>+</span></div>
                                <span>{item.price}₽</span>
                            </div>
                        </div>
                    </Modal>


                </div>
            </div>

        </>
    );
};

export default Product_main;
