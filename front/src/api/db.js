import axios from "axios";

export const backAccess = axios.create({
    baseURL: `http://${window.location.hostname}:4444`,
    'Accept': 'application/json', 
    'Content-Type':'application/json'
})

export const getKeyboards = async () => {
    const response = await backAccess('/keyboards')
    return response.data
}

export const getComponents = async () => {
    const response = await backAccess('/components')
    return response.data
}

export const getProducts = async () => {
    const response = await backAccess('/products')
    return response.data
}