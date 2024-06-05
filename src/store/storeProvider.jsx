import { createContext,useState,useEffect } from "react";
import { getData } from "../data/axios";

export const StoreContext = createContext(null)

export const StoreProvider = ({children})=>{

    const [maxQuantity,setMaxQuantity] = useState(null)
    const [offers,setOffers] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            const {maxQuantity,offers} = await getData()
            setOffers(offers)
            setMaxQuantity(maxQuantity)
        }
        fetchData()
    },[])


    const handleMaxBuyQuantity=()=> {
        setMaxQuantity((prev)=>prev-1)
    }

    return (
        <StoreContext.Provider value={{maxQuantity,offers,handleMaxBuyQuantity}}>{children}</StoreContext.Provider>
    )
}