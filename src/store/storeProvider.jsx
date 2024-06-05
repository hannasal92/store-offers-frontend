import { createContext,useState,useEffect } from "react";
import { getData } from "../data/axios";

export const StoreContext = createContext(null)

export const StoreProvider = ({children})=>{

    const [maxQuantity,setMaxQuantity] = useState(null)
    const [offers,setOffers] = useState(null)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await getData()
            if(response?.statusCode ==404){
                    setError(response.message || "Something went wrong!");
            }else{
               
                setOffers(response.offers)
                setMaxQuantity(response.maxQuantity)
            }
            
        }
        fetchData()
    },[])


    const handleMaxBuyQuantity=()=> {
        setMaxQuantity((prev)=>prev-1)
    }

    return (
        <StoreContext.Provider value={{maxQuantity,offers,handleMaxBuyQuantity,error}}>{children}</StoreContext.Provider>
    )
}