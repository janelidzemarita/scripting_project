
import React from "react";
import { Nav, NavLink, NavMenu , }
    from "./NavbarElements";
// import { NavDropdown } from 'react-bootstrap';
//

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/homePage" activeStyle>
                        Home Page
                    </NavLink>
                    <NavLink to="/tours" activeStyle>
                        Tours
                    </NavLink>
                    <NavLink to="/camping" activeStyle>
                       Camping
                    </NavLink>
                    <NavLink to="/about" activeStyle>
                        About Us
                    </NavLink>
                    <NavLink to="/contact" activeStyle>
                        Contact Us
                    </NavLink>
                    <NavLink to="/blogs" activeStyle>
                        Blogs
                    </NavLink>
                    <NavLink to="/sign-up" activeStyle>
                        Sign Up
                    </NavLink>
                    <NavLink to="/sign-in" activeStyle>
                        Sign In
                    </NavLink>
                    {/*<NavDropdown title="Language" id="basic-nav-dropdown">*/}
                    {/*    <NavDropdown.Item href="#">English</NavDropdown.Item>*/}
                    {/*    <NavDropdown.Item href="#">ქართული</NavDropdown.Item>*/}
                    {/*</NavDropdown>*/}
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;

