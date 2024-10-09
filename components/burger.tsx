
import Image from "@/node_modules/next/image"
import Modal from "./modal"

export default function Burger() {
    return (

        <div className="w-full flex flex-wrap gap-5">
        <div className="flex flex-col justify-between p-3 bg-white w-[300px] h-[411px] rounded-[15px]">
            <div className="flex flex-col gap-3">
            <Image src="/images/super.svg" alt="super" width={290} height={10} />     
            <span>689₽</span>
            <span>Мясная бомба</span>
            </div>


                <div className="flex flex-col gap-2">
                <span className="text-gray-300">520г</span>
                <button className="rounded-[13px] w-full bg-gray-100 h-[40px]">Добавить</button>
                </div>
        </div>

        </div>
    )
}