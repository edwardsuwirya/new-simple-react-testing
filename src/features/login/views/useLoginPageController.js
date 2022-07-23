import {useAuth} from "../../../shared/hook/useAuth";
import useViewState from "../../../shared/hook/useViewState";
import {useNavigate} from "react-router-dom";
import {useDeps} from "../../../shared/depContext";

const useLoginPageController = () => {
    const {login} = useAuth();
    const navigate = useNavigate();
    const [viewState, setLoading, setData, setError] = useViewState();
    const onLogin = async (userName, password) => {
        setLoading();
        try {
            if (userName === '' && password === '') {
                setError('Please input your user name and password')
            } else {
                await login({userName, password});
                setData('');

                // navigate("/main", {state: response.message, replace: true});
                navigate("/main", {replace: true});
            }
        } catch (e) {
            setError('Invalid User Name or password ');
        }
    }
    return {
        onLogin,
        viewState
    }
}

export default useLoginPageController;
