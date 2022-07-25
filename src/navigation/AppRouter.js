import {Route, Routes} from "react-router-dom";
import LoginPageView from "../features/login/views/LoginPageView";
import ProtectedRoute from "./ProtectedRoute";
import useLoginPageController from "../features/login/views/useLoginPageController";
import App from "../App";
import JsonPlaceHolderView from "../features/jsonPlaceHolder/views/JsonPlaceHolderView";
import useJsonPlaceHolderController from "../features/jsonPlaceHolder/views/useJsonPlaceHolderController";
import JsonPlaceHolderListView from "../features/jsonPlaceHolder/views/JsonPlaceHolderListView";

const AppRouter = () => {
    return (
            <Routes>
                <Route index element={<LoginPageView controller={useLoginPageController}/>}/>
                <Route element={<ProtectedRoute/>}>
                    <Route path="main" element={<App/>}>
                        <Route path="jsonplaceholder"
                               element={<JsonPlaceHolderView controller={useJsonPlaceHolderController}/>}/>
                        <Route path="jsonplaceholderList"
                               element={<JsonPlaceHolderListView/>}/>
                    </Route>
                </Route>
                <Route
                    path="*"
                    element={
                        <main style={{padding: "1rem"}}>
                            <p>Oopss... page not found</p>
                        </main>
                    }
                />
            </Routes>
    )
}

export default AppRouter
