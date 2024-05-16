const deployed = import.meta.env.PROD
console.log("deployed", deployed)
const BASE_URL_DEV = "https://api.joergoertel.dk/api/v1"
const BASE_URL_PROD = "http://164.92.235.25:7070/api/v1"
export const BASE_URL = deployed ? BASE_URL_PROD : BASE_URL_DEV
export const INIT_USER_LOGIN = {username: "", roles: ["USER"]}
export const INIT_USER_REGISTER = {username: "", password: "", roles: ["USER"]}