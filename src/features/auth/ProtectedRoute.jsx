import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import PropTypes from "prop-types";

function ProtectedRoute({isAuthenticated, children}) {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/login');
        }
    }, [isAuthenticated, navigate]);

    if(isAuthenticated) return <>{children}</>;
}

export default ProtectedRoute;

ProtectedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    isAuthenticated: PropTypes.bool
}