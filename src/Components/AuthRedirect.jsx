import { Navigate } from "react-router-dom";
import useAuthStore from "../store/useAuthStore";

function AuthRedirect({ children }) {
    const token = useAuthStore((state) => state.token); // <-- use the hook!
    if (token) {
        return <Navigate to="/home" replace />;
    }
    return children;
}

export default AuthRedirect;