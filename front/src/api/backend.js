import axios from "axios";

export const backAccess = axios.create({
    baseURL: `http://${window.location.hostname}:4444`,
    'Accept': 'application/json',
    'Content-Type':'application/json',
    'withCredentials': true
})
// gere la liason pour login entre la backend et le frontend
export const login = async (email, password) => {
    return (await backAccess.post("/login", {
        email, password
    })).data
}
// gere la liason pour logout entre la backend et le frontend
export const logout = async () => {
    return (await backAccess("/logout")).data
}
// gere la liason pour register entre la backend et le frontend
export const register = async (email, password, first_name, last_name) => {
    return (await backAccess.post("/register", {
        email, password, first_name, last_name
    })).data
}
// gere la liason pour getUserInfo entre la backend et le frontend
export const getUserInfo = async () => {
    return (await backAccess("/getUserInfo")).data
}
// gere la liason pour updatePassword entre la backend et le frontend
export const updatePassword = async (user_id, password) => {
    return (await backAccess("/update", {
        user_id, password
    })).data
}
// gere la liason pour update entre la backend et le frontend
export const update = async (email, password, old_password, first_name, last_name) => {
    return (await backAccess.post("/update", {
        email, password, old_password, first_name, last_name
    })).data
}
// gere la liason pour deleteUser entre la backend et le frontend
export const deleteUser = async (user_id) => {
    return (await backAccess.delete("/users/delete", {
        user_id
    })).data
}


/*NEWSLETTER UPDATERS*/
// gere la liason pour newsletterOn entre la backend et le frontend
export const newsletterOn = async (email) => {
    return (await backAccess.post("/newsletterOn", {
        email
    })).data
}
// gere la liason pour newsletterOff entre la backend et le frontend
export const newsletterOff = async (email) => {
    return (await backAccess.post("/newsletterOff", {
        email
    })).data
}
//  gere la liason pour getInfo entre la backend et le frontend
export const getInfo = async () => {
    return (await backAccess("/info")).data
}
// gere la liason pour setInfo entre la backend et le frontend
export const setInfo = async (info) => {
    return (await backAccess.post("/info", info)).data
}