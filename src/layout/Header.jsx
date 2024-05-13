import MainNav from "./MainNav.jsx";
import styled from "styled-components";
import Logout from "../features/auth/Logout.jsx";
import PropTypes from "prop-types";

const StyledHeader = styled.header`
    background-color: var(--color-purple-200);
    border-bottom: 1px solid var(--color-purple-950);
    padding: 1.2rem 4.8rem;
    display: flex;
    justify-content: space-between;
`;

function Header({setIsAuthenticated, roles}) {

    return (
        <StyledHeader>
            <MainNav roles={roles}/>
            <Logout setIsAuthenticated={setIsAuthenticated}/>
        </StyledHeader>
    )
}

export default Header;

Header.propTypes = {
    setIsAuthenticated: PropTypes.func.isRequired,
    roles: PropTypes.array.isRequired
}