import {IoLogOutOutline} from "react-icons/io5";
import styled from "styled-components";
import PropTypes from "prop-types";
import {clearLocalStorage} from "../../services/apiFacade.js";

const StyledButton = styled.button`
    display: flex;
    gap: 1rem;
    align-items: center;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: 500;
    color: var(--color-purple-700);
    background-color: var(--color-purple-200);
    border-style: none;
    border-radius: 30px;
    cursor: pointer;

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-purple-950);
        background-color: var(--color-purple-100);
        transition: background-color 0.6s ease;
    }
`

function Logout({setIsAuthenticated}) {

    const logoutHandler = () => {
        setIsAuthenticated(false);
        clearLocalStorage();
    }

    return (
        <StyledButton onClick={logoutHandler}><IoLogOutOutline/><span>Logout</span></StyledButton>
    );
}

export default Logout;

Logout.propTypes = {
    setIsAuthenticated: PropTypes.func.isRequired
}