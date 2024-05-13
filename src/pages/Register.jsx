import RegisterForm from "../features/auth/RegisterForm.jsx";
import styled from "styled-components";
import PropTypes from "prop-types";

const RegisterLayout = styled.main`
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

function Register({isAuthenticated, setIsAuthenticated, setUser, ...user}) {
    return (
        <RegisterLayout>
            <Heading as="h4">Register</Heading>
            <RegisterForm isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUser={setUser} {...user} />
        </RegisterLayout>
    );
}

export default Register;

Register.propTypes = {
    isAuthenticated: PropTypes.bool,
    setIsAuthenticated: PropTypes.func,
    setUser: PropTypes.func,
    isLoading: PropTypes.bool,
    error: PropTypes.string
}