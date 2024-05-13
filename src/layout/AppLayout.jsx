import {Outlet} from "react-router-dom";
import Header from "./Header.jsx";
import styled from "styled-components";
import PropTypes from "prop-types";

const Main = styled.main`
    background-color: var(--color-grey-50);
    height: 100vh;
`

function AppLayout({setIsAuthenticated, roles}) {
    return (
        <>
            <Header setIsAuthenticated={setIsAuthenticated} roles={roles}/>
            <Main>
                <h4>CPH App</h4>
                <Outlet/>
            </Main>
        </>
    );
}

export default AppLayout;

AppLayout.propTypes = {
    setIsAuthenticated: PropTypes.func.isRequired,
    roles: PropTypes.array.isRequired
}