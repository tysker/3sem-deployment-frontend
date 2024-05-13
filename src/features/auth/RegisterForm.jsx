import {INIT_USER_LOGIN} from "../../services/globalVariables.js";
import {useEffect, useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import Spinner from "../../layout/Spinner.jsx";
import styled from "styled-components";
import {register} from "../../services/apiFacade";
import PropTypes from "prop-types";

const ErrorStyle = styled.div`
    color: var(--color-danger);
    font-size: 2rem;
    text-align: center;
    margin-top: 1.6rem;
`;

const FormContainer = styled.form`
    max-width: 500px;
    margin: 2rem auto;
    overflow: hidden;
    padding: 0 2rem;
`;

const FormGroup = styled.div`
    margin-bottom: 1.6rem;

    label {
        display: block;
        margin-bottom: 0.8rem;
        font-weight: 500;
    }

    input {
        width: 100%;
        padding: 0.8rem;
        font-size: 1.6rem;
        outline: none;
        border: 2px solid var(--color-grey-800);
        border-radius: 10px;
    }

    input:focus {
        border: 2px solid var(--color-purple-500);
    }
`;

const StyledButton = styled.button`
    display: block;
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--color-grey-0);
    background-color: var(--color-purple-500);
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background-color: var(--color-purple-600);
        transition: background-color 0.3s;
    }

    &:disabled {
        background-color: var(--color-grey-400);
        cursor: not-allowed;
    }
`;

function RegisterForm({isAuthenticated, setIsAuthenticated, setUser, error, isLoading}) {

    const [username, setUsername] = useState("stevejobs");
    const [password, setPassword] = useState("stevejobs123");
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/home", {replace: true});
    }, [isAuthenticated, navigate])


    const handleSubmit = async (e) => {
        e.preventDefault();

        // Show loading spinner
        setUser({isLoading: true, error: null, user: INIT_USER_LOGIN});

        if (username && password) {
            try {
                const data = await register({username, password});
                if (data.token) {
                    setUser({isLoading: false, error: null, user: {username: data.username, roles: data.roles}});
                    setIsAuthenticated(true);
                } else {
                    setUser({isLoading: false, error: data.message, user: INIT_USER_LOGIN});
                    setIsAuthenticated(false);
                }
            } catch (e) {
                console.log("Error message: ", e);
                setUser({isLoading: false, error: e.message, user: INIT_USER_LOGIN});
                console.log(error);
                setIsAuthenticated(false);
            }
        }
    }

    if (isLoading) return <Spinner/>;

    return (
        <>
            <FormContainer onSubmit={handleSubmit}>
                <FormGroup>
                    <label htmlFor="username">Username</label>
                    <input
                        required
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter your username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                    />
                </FormGroup>

                <FormGroup>
                    <label htmlFor="password">Password</label>
                    <input
                        required
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter your password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </FormGroup>
                <StyledButton disabled={!username || !password}>Register</StyledButton>
            </FormContainer>
            <NavLink to="/login">Login</NavLink>
            {error && <ErrorStyle>{error}</ErrorStyle>}
        </>
    );
}

export default RegisterForm;

RegisterForm.propTypes = {
    isAuthenticated: PropTypes.bool,
    setIsAuthenticated: PropTypes.func,
    setUser: PropTypes.func,
    error: PropTypes.string,
    isLoading: PropTypes.bool
}