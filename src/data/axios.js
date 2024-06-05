import axios from 'axios'

const serviceUrl = import.meta.env.VITE_SERVICE_URL

export const getData = ()=>axios.get(`${serviceUrl}/offers`).then(res=>res.data).catch(err=>err.response.data)
export const editOffer = (id)=>axios.put(`${serviceUrl}/offers/${id}`).then(res=>res.data).catch(err=>err.response.data)