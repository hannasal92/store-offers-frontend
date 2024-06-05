import axios from 'axios'

const serviceUrl = "http://localhost:3000/store/offersFile"

export const getOffers = ()=>axios.get(serviceUrl).then(res=>res.data).catch(err=>err)