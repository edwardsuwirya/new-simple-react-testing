import "./loginPageStyle.css";
import useLoginFormController from "../component/useLoginFormController";
import LoginForm from "../component/LoginForm";

const LoginPageView = ({controller}) => {
    const {
        onLogin,
        viewState
    } = controller();

    return (
        <div className='login-container'>
            <LoginForm state={viewState} controller={useLoginFormController} events={onLogin}/>
        </div>
    );
}
export default LoginPageView;
