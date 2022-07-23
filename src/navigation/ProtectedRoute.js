import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../shared/hook/useAuth";

const ProtectedRoute = () => {
    const {userInfo} = useAuth()
    // console.log('useAuth');
    return userInfo !== null ? <Outlet/> : <Navigate to='/' replace/>;
};

export default ProtectedRoute;
