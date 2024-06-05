import axios from 'axios'

const serviceUrl = import.meta.env.VITE_SERVICE_URL

export const getData = (userId)=>{

    return axios.get(`${serviceUrl}/offers/${userId}`)
    .then(res=>res.data)
    .catch(err=>err.response.data)
}

export const editOffer = (id, userId)=>{

    return axios.put(`${serviceUrl}/offers?id=${id}&userId=${userId}`)
    .then(res=>res.data)
    .catch(err=>err.response.data);
}