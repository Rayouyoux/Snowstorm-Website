import axios from "axios";

export const backAccess = axios.create({
    baseURL: `http://${window.location.hostname}:4444`,
})

