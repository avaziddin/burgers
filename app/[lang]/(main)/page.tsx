import Burger from "@/components/burger";
import Modal from "@/components/modal";
import Layout from "./Layout";
import { getDictionary } from './dictionaries'


export default async function Home ({
    params: {lang},
} : {
    params: {lang:string};
} ) {
    const translation = await getDictionary(lang)
    console.log(translation);
    
    return (
        <Layout><Burger></Burger></Layout>
    )
}

