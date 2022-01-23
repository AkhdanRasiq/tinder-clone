import axios from 'axios'
import { strHost } from './util'

const axiosInstance = axios.create({
    baseURL: strHost()
})

export async function fetchData() {
    const res = await axiosInstance.get("/tinder/cards")
    if (!res)
        return Promise.reject("No Result!")
    return Promise.resolve(res)

}
