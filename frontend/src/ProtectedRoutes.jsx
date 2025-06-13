import {Outlet, Navigate} from "react-router-dom";
import {useStore} from "./GlobalVariables";

const ProtectedRoutes =()=>{
    const {authUser} = useStore();
    return authUser? <Outlet/> :<Navigate to="/login"/>
}
export default ProtectedRoutes;