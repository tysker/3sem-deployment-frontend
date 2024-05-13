import {BASE_URL} from "./globalVariables.js"


const setToLocalStorage = (key, value) => {
    window.localStorage.setItem(key, value);
}

const getFromLocalStorage = (key) => {
    return window.localStorage.getItem(key);
}

const clearLocalStorage = () => {
    window.localStorage.clear();
}

const login = async ({username, password}) => {

    try {
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password
            })
        })

        const data = await response.json();

        if (data.token) {
            setToLocalStorage("token", data.token);
            setToLocalStorage("user", JSON.stringify({user: data.username, roles: data.roles}));
        }

        return data;
    } catch (e) {
        throw new Error("Server is not available. Please try again later.");
    }
}

const register = async ({username, password}) => {

    try {
        const response = await fetch(`${BASE_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "username": username,
                "password": password,
                "roleList": ["USER"]
            })
        })

        return await response.json();

    } catch (e) {
        throw new Error(e.message);
    }
}



const getPosts = async () => {
    try {
        const token = getFromLocalStorage("token");
        const response = await fetch(`${BASE_URL}/posts`, {
            headers: {
                "Accept": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        return await response.json();

    } catch (e) {
        throw new Error(e);
    }

}

export {
    login,
    register,
    clearLocalStorage,
    getPosts
}