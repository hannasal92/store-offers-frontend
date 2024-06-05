import { createContext,useState,useEffect } from "react";
import { editOffer, getData } from "../data/axios";

export const StoreContext = createContext(null)

export const StoreProvider = ({children})=>{

    const [offers,setOffers] = useState(null)
    const [error,setError] = useState(null)

    useEffect(()=>{
        const fetchData = async ()=>{
            const response = await getData(localStorage.getItem('userId'))
            console.log(response)
            if(response?.statusCode ==404){
                    setError(response.message || "Something went wrong!");
            }else{
                setOffers(response.offers)
            }
        }
        fetchData()
    },[])



const buyOffer=async(id)=> {
    const response = await editOffer(id,localStorage.getItem('userId'))
    setOffers(response)
    return true
  }


    return (
        <StoreContext.Provider value={{offers,error,buyOffer}}>{children}</StoreContext.Provider>
    )
}