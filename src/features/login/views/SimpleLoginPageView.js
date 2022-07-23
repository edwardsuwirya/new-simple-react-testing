import AppFormInput from "../../shared/components/AppFormInput";
import AppButton from "../../shared/components/AppButton";
import {useState} from "react";
import {useDeps} from "../../../shared/depContext";
import LoadingBackDrop from "../../../shared/components/loadingBackDrop/LoadingBackDrop";
import {useLocalStorage} from "../../../shared/hook/useLocalStorage";

const SimpleLoginPageView = () => {
    const {apiClient, services} = useDeps();
    const loginService = services.loginService(apiClient());
    const [user, setUser] = useLocalStorage("user", null);
    const [viewState, setViewState] = useState({isLoading: false, data: null, error: null})
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const onUserNameChange = (event) => setUserName(event.target.value);
    const onPasswordChange = (event) => setPassword(event.target.value);
    const onLoginBtnClick = async () => {
        setViewState({isLoading: true, data: null, error: null})
        try {
            const response = await loginService.doAuthenticate(userName, password);
            if (response) {
                setUser(userName);
                setViewState({isLoading: false, data: response.data, error: null})
            }
        } catch (e) {
            console.log(e)
            setViewState({isLoading: false, data: null, error: e})
        }
    }

    return (
        <>
            {viewState.isLoading && <LoadingBackDrop title={'Please Wait'}/>}
            <main className='container'>
                <AppFormInput id='userName' label='User Name' value={userName}
                              onValueChange={onUserNameChange}/>
                <AppFormInput id='password' type='password' label='Password' value={password}
                              onValueChange={onPasswordChange}/>
                <AppButton handleClick={onLoginBtnClick} label='Login'/>
            </main>
            {viewState.error && <div>{viewState.error}</div>}
        </>
    )
}

export default SimpleLoginPageView;
