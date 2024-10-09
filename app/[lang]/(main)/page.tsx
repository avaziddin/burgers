import Burger from "@/components/burger";
import Layout from "./Layout";
import { getDictionary } from "../dictionaries";


export default async function Home({
    params: { lang },
}: {
    params: { lang: string };
}) {
    const translation = await getDictionary(lang)
    console.log(translation);

    return (

        <Layout translation={translation} lang={lang}>
            <Burger></Burger>
        </Layout>
    )
}

