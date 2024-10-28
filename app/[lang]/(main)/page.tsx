import Layout from "./Layout";
import { getDictionary } from "../dictionaries";
import Product_main from "@/components/Product_main";
import { Menu } from "@/models/menu";


export default async function Home({
    params: { lang },
}: {
    params: { lang: string };
}) {

    const res = await fetch("http://localhost:3000/api/menu", { cache: "no-cache" })
    console.log(res, "heloooooooooooo");

    const translation = await getDictionary(lang)
    console.log(translation);


    const { data } = await res.json()
    console.log(data);


    return (


        <Layout translation={translation} lang={lang}>
            <div className="w-full flex flex-wrap gap-5">
                {data.map((item: Menu) => {
                    return <Product_main item={item} lang={lang} />
                })}
            </div>
        </Layout>

    )
}

