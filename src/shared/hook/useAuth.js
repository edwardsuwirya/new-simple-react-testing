import {createContext, useContext} from "react";
import {useLocalStorage} from "./useLocalStorage";
import {APP_TOKEN, USER_INFO} from "../constants";
import useLoginService from "../../services/loginService/useLoginService";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const {doAuthenticate, doGetUser} = useLoginService();
    const [token, setToken] = useLocalStorage(APP_TOKEN, null);
    const [userInfo, setUserInfo] = useLocalStorage(USER_INFO, null);
    const login = async (data) => {
        try {
            const response = await doAuthenticate(data.userName, data.password);
            if (response) {
                setToken(response.token);
                const userResponse = await doGetUser();
                setUserInfo(userResponse.message);
            }
        } catch (e) {
            console.log(e)
            throw e
        }
    };

    const logout = () => {
        setToken(null);
        setUserInfo(null);
    };
    return <AuthContext.Provider value={{token, userInfo, login, logout}}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
