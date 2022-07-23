import {Link, useNavigate} from "react-router-dom";
import {useAuth} from "../shared/hook/useAuth";
import '../App.css';
import {useSelector} from "react-redux";
import {postSelector} from "../features/jsonPlaceHolder/state/jsonPlaceHolderSelector";

const Navigation = () => {
    const {userInfo, logout} = useAuth();
    const posts = useSelector(postSelector);
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
                    <div>Post {posts.length}</div>
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
