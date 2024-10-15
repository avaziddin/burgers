import Burger from "@/components/burger";
import Layout from "./Layout";
import { getDictionary } from "../dictionaries";
 

export default async function Home({
    params: { lang },
}: {
    params: { lang: string };
}) {

    const res = await fetch('http://localhost:3000/api/menu')
    console.log(res);
    
    const translation = await getDictionary(lang)
    console.log(translation);


    const data = await res.json()
    console.log(data);
    

    return (


        <Layout translation={translation} lang={lang}>
            <Burger></Burger>
        </Layout>
        
    )
}

