import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../shared/hook/useAuth";
import '../App.css';
import {useSelector} from "react-redux";
import {postSelector} from "../features/jsonPlaceHolder/state/jsonPlaceHolderSelector";
import TotalPostLabel from "../features/jsonPlaceHolder/components/TotalPostLabel";

const Navigation = () => {
    const {userInfo, logout} = useAuth();
    const navigate = useNavigate();
    // const location = useLocation();
    return (
        <>
            <nav className='navigation-container'>
                <div>
                    <Link to="/main/jsonplaceholder" replace>JsonPlaceHolder</Link> |{" "}
                    <Link to="/main/jsonplaceholderList" replace>List</Link> |{" "}
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '10px'}}>
                    <TotalPostLabel/>
                    <button className='button-form button-logout' onClick={() => {
                        logout();
                        navigate("/", {replace: true});
                    }}>
                        {/*Logout {location.state}*/}
                        Logout {userInfo}
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navigation;
