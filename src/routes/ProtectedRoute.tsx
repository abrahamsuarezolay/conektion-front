import { Navigate } from 'react-router-dom';


const ProtectedRoute = ({
    user,
    redirectPath = "/",
    children
}) => {
    
    if (!user) {
        return <Navigate to="/" replace />
    }else{
        return children
    }
}

export default ProtectedRoute;