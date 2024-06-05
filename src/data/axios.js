import axios from 'axios'

const serviceUrl = import.meta.env.VITE_SERVICE_URL

export const getData = ()=>axios.get(serviceUrl).then(res=>res.data).catch(err=>err)
