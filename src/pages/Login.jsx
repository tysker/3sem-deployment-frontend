import LoginForm from "../features/auth/LoginForm.jsx";
import styled from "styled-components";
import PropTypes from "prop-types";

const LoginLayout = styled.main`
    min-height: 100vh;
    background-color: var(--color-grey-50);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Heading = styled.h4`
    font-size: 3rem;
    font-weight: 600;
    text-align: center;
    color: var(--color-purple-800);
`;

function Login({isAuthenticated, setIsAuthenticated, setUser, ...user}) {
    return <LoginLayout>
        {!user.isLoading && <Heading as="h4">Log in to your account</Heading>}
        <LoginForm isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated}
                   setUser={setUser} {...user}/>
    </LoginLayout>;
}

export default Login;

Login.propTypes = {
    isAuthenticated: PropTypes.bool,
    setIsAuthenticated: PropTypes.func,
    setUser: PropTypes.func,
    isLoading: PropTypes.bool,
    error: PropTypes.string
}