import axios from "axios";

export const backAccess = axios.create({
    baseURL: `http://${window.location.hostname}:4444`,
    'Accept': 'application/json', 
    'Content-Type':'application/json',
    'withCredentials': true
})

export const login = async (email, password) => {
    return (await backAccess.post("/login", {
        email, password
    })).data
}

export const logout = async () => {
    return (await backAccess.post("/logout")).data
}

export const register = async (email, password, first_name, last_name) => {
    return (await backAccess.post("/register", {
        email, password, first_name, last_name
    })).data
}

export const getUserInfo = async () => {
    return (await backAccess("/getUserInfo")).data
}

export const getInfo = async () => {
    return (await backAccess("/info")).data
}

export const setInfo = async (info) => {
    return (await backAccess.post("/info", info)).data
}