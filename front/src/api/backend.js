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
    return (await backAccess("/logout")).data
}

export const register = async (email, password, first_name, last_name) => {
    return (await backAccess.post("/register", {
        email, password, first_name, last_name
    })).data
}

export const getUserInfo = async () => {
    return (await backAccess("/getUserInfo")).data
}

export const updatePassword = async (user_id, password) => {
    return (await backAccess("/update", {
        user_id, password
    })).data
}

export const update = async (email, password, first_name, last_name) => {
    return (await backAccess.post("/update", {
        email, password, first_name, last_name
    })).data
}

export const deleteUser = async (user_id) => {
    return (await backAccess("/users/delete", {
        user_id
    })).data
}

/*NEWSLETTER UPDATERS*/
export const newsletterOn = async (email) => {
    return (await backAccess("/newsletterOn", {
        email
    })).data
}

export const newsletterOff = async (email) => {
    return (await backAccess("/newsletterOff", {
        email
    })).data
}

export const getInfo = async () => {
    return (await backAccess("/info")).data
}

export const setInfo = async (info) => {
    return (await backAccess.post("/info", info)).data
}