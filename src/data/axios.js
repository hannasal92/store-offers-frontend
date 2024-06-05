import axios from 'axios'

const serviceUrl = import.meta.env.VITE_SERVICE_URL

export const getData = (userId)=>axios.get(`${serviceUrl}/offers/${userId}`).then(res=>res.data).catch(err=>err.response.data)
export const editOffer = (id,userId)=>axios.put(`${serviceUrl}/offers?id=${id}&userId=${userId}`).then(res=>res.data).catch(err=>err.response.data)