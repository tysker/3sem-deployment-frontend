import {login} from "../services/apiFacade.js";


export const useAuthentication = async (setIsAuthenticated, setUser, username, password) => {
    // Show loading spinner
    setUser({isLoading: true, error: null, user: {username, roles: []}});

    if (username && password) {
        try {
            const data = await login({username, password});
            if (data.token) {
                setUser({isLoading: false, error: null, user: {username: data.username, roles: data.roles}});
                setIsAuthenticated(true);
            } else {
                setUser({isLoading: false, error: data.message, user: {username, roles: []}});
                setIsAuthenticated(false);
            }
        } catch (error) {
            setUser({isLoading: false, error: error.message, user: {username, roles: []}});
            setIsAuthenticated(false);
        }
    }

}