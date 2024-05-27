import { Navigate , Route , Routes } from "react-router-dom"

function AppRoutes() {
  return (
        <Routes>
            <Route path="/" element={<>HOME PAGE</>}/>
            <Route path="/user-profile" element={<>USER PROFILE</>}/>
            <Route path="*" element={<Navigate to={"/"}/>}/>
        </Routes>
  )
}

export default AppRoutes