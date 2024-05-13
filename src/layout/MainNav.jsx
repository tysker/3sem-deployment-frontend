import {NavLink} from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";
import {IoAlertCircleOutline, IoCogOutline, IoHomeOutline, IoMailOutline} from "react-icons/io5";

const NavList = styled.nav`
    display: flex;
    gap: 0.8rem;
    list-style: none;
`;

const StyledNavLink = styled(NavLink)`
    display: flex;
    gap: 1rem;
    align-items: center;
    text-decoration: none;
    padding: 1rem 2rem;
    font-size: 2rem;
    font-weight: 500;
    color: var(--color-purple-700);

    &:hover,
    &:active,
    &.active:link,
    &.active:visited {
        color: var(--color-purple-950);
        background-color: var(--color-purple-100);
        border-radius: 30px;
        transition: background-color 0.6s ease;
    }
`

function MainNav({roles}) {

    const role = roles[0];

    const adminList = (
        <NavList>
            <li><StyledNavLink to="/home"><IoHomeOutline/><span>Home</span></StyledNavLink></li>
            <li><StyledNavLink to="/about"><IoAlertCircleOutline/><span>About</span></StyledNavLink></li>
            <li><StyledNavLink to="/settings"><IoCogOutline /><span>Settings</span></StyledNavLink></li>
        </NavList>
    )

    const userList = (
        <NavList>
            <li><StyledNavLink to="/home"><IoHomeOutline/><span>Home</span></StyledNavLink></li>
            <li><StyledNavLink to="/about"><IoAlertCircleOutline/><span>About</span></StyledNavLink></li>
            <li><StyledNavLink to="/posts"><IoMailOutline/><span>Posts</span></StyledNavLink></li>
        </NavList>
    )

    return (
        <>
            {role === "ADMIN" ? adminList : userList}
        </>
    )


}

export default MainNav;

MainNav.propTypes = {
    roles: PropTypes.array.isRequired
}