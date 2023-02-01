import axios from "axios";
import { backAccess } from "./backend";

// Keyboards //
export const getKeyboards = async () => {
    const response = await backAccess('/keyboards')
    return response.data
}
export const getKeyboardsById = async (id) => {
    const response = await backAccess(`/keyboards/${id}`)
    return response.data
}
export const getLastKeyboards = async () => {
    const response = await backAccess('/keyboards/last')
    return response.data
}

// Components //
export const getComponents = async () => {
    const response = await backAccess('/components')
    return response.data
}
export const getComponentsByKeyboards = async (id) => {
    const response = await backAccess(`/components/by-keyboard/${id}`)
    return response.data
}
export const getComponentsById = async (id) => {
    const response = await backAccess(`/components/${id}`)
    return response.data
}
export const getLastComponents = async () => {
    const response = await backAccess('/components/last')
    return response.data
}

// Products //
export const getProducts = async () => {
    const response = await backAccess('/products')
    console.log(response)
    return response.data
}
export const getProductsById = async (id) => {
    const response = await backAccess(`/products/${id}`)
    return response.data
}
export const getLastProducts = async () => {
    const response = await backAccess('/products/last')
    return response.data
}

// User Keyboard //
export const getUserKeyboards = async (sort, user_id) => {
    const response = await backAccess('/user_keyboards', {
        params: { sort, user_id }
    })
    return response.data
} // getUserKeyboards(sort="mostliked")
// Sales //
export const getMostSales = async () => {
    const response = await backAccess('/sales/most-sales')
    return response.data
}