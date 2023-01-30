import axios from "axios";
import { backAccess } from "./backend";

// Keyboards //
export const getKeyboards = async () => {
    const response = await backAccess('/keyboards')
    return response.data
}
export const getKeyboardsById = async () => {
    const response = await backAccess('/keyboards/:id')
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
export const getComponentsByKeyboards= async () => {
    const response = await backAccess('/components/By-keyboard/:id')
    return response.data
}
export const getComponentsById = async () => {
    const response = await backAccess('/components/:id')
    return response.data
}
export const getLastComponents = async () => {
    const response = await backAccess('/components/last')
    return response.data
}

// Products //
export const getProducts = async () => {
    const response = await backAccess('/products')
    return response.data
}
export const getProductsById = async () => {
    const response = await backAccess('/products/:id')
    return response.data
}
export const getLastProducts = async () => {
    const response = await backAccess('/products/last')
    return response.data
}

// User Keyboard //
export const getUserKeyboards = async () => {
    const response = await backAccess('/user_keyboards')
    return response.data
}