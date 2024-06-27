import { Navigate , Route , Routes } from "react-router-dom"
import Home from "../Views/Home"
import Forms from "../Views/forms"
import LogIn from "../Views/LogIn"
import ProtectedRoutes from "./protectedRoutes";

function NavigateRoutes() {
  return (
        <Routes>
            <Route path="/form" element={<Forms />}/>
            <Route path="/login" element={<LogIn />}/>
            <Route element={<ProtectedRoutes/>}>    
                <Route path="/" element={<Home/>}/>
                <Route path="/user-profile" element={<>USER PROFILE</>}/>
                <Route path="*" element={<Navigate to={"/"}/>}/>
            </Route>
        </Routes>
  )
}

export default NavigateRoutes