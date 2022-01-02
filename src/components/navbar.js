import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Bars, } from "./navbarelements.js";
import Logo from ".././images/singhsupplylogo.png";
import "./navbar.css"

const Navbar = () => {

    return (

        <>
            <Nav>
                <NavLink to="/">
                    <img class="logo" src={Logo} alt="" />
                </NavLink>
                <Bars />

                <NavMenu>
                    <NavLink to="/">Home</NavLink>

                    <NavLink to="/jordans" activestyle >Jordan</NavLink>
                    <NavLink to="/nike" activestyle>Nike</NavLink>
                    <NavLink to="/addidas" activestyle>Addidas</NavLink>

                </NavMenu>

                <NavBtn>
                    <NavBtnLink to="/contact">Contact Us</NavBtnLink>
                </NavBtn>

            </Nav>
        </>
    );
};

export default Navbar;