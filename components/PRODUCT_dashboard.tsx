import Image from "@/node_modules/next/image";
import DashboardProductModal from "./Dashboard_product_modal";

type Props = {
    item: any;
};

const PRODUCT_dashboard: React.FC<Props> = ({ item }) => {

    return (

        <>
            <div
                key={item._id}
                className="p-[1%] flex gap-[2%]  rounded-[15px] bg-blue-400 mb-[2%] text-black"
            >
                <Image
                    className="w-[30%] h-[35vh] object-cover rounded-[10px] mb-[5px]"
                    src={item.images || ""}
                    alt="burger"
                    width={500}
                    height={500}
                />
                <div className="w-[70%] flex justify-between">
                    <div className="w-full text-white overflow-hidden flex flex-col">
                        <h2 className="text-[18px] border-b font-600"><span className="font-bold">Цена:</span>{item.price}  ₽</h2>
                        <p className="text-[18px] border-b"><span className="font-bold">Название ru:</span>  {item.titles.ru}</p>
                        <p className="text-[18px] border-b"><span className="font-bold">Название en:</span> {item.titles.en}</p>
                        <p className="text-[18px] border-b"><span className="font-bold">Описание ru:</span>  {item.description.ru}</p>
                        <p className="text-[18px] border-b"><span className="font-bold">Описание en:</span> {item.description.en}</p>
                        <p className="text-[18px] border-b"><span className="font-bold">Состав ru:</span> {item.composition.ru}</p>
                        <p className="text-[18px] border-b"><span className="font-bold">Состав en:</span> {item.composition.en}</p>
                        <p className="text-[18px] border-b"><span className="font-bold">Категория:</span> {item.category}</p>
                        <p className="text-[18px]"><span className="font-bold">Вес:</span> {item.weight}g</p>
                    </div>

                </div>

                <div className="flex-col justify-end relative">
                    <DashboardProductModal type={"menu"} id={item._id} Button={<button className="text-white" >•••</button>} />
                </div>

            </div>
        </>
    );
};

export default PRODUCT_dashboard;
