import useUser from "hooks/useUser";
import { memo } from "react";
import { Navigate } from "react-router-dom";

function UserProtected({ children }) {
    const { user } = useUser();
    return <>{user ? <Navigate to="home" replace /> : children}</>;
}

export default memo(UserProtected);
