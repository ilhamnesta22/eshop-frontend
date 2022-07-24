import React from "react";
import { Navbar as NavBar, Container, Nav, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { MdShoppingCart, MdPerson } from "react-icons/md"


function Navbar({isLogedIn}) {
    const navigate = useNavigate();

    const iconCursor = {cursor : "pointer"}
    return (
        <NavBar>
            <Container>
                <NavBar.Brand>e-SHOP</NavBar.Brand>
                <Nav>
                    {isLogedIn ?
                    <>
                        <MdShoppingCart style={iconCursor} onClick={() => navigate('/carts')} />
                        <MdPerson style={iconCursor} onClick={() => navigate('/profile')} />
                    </>
                    :
                    <>
                    <Button onClick={() => navigate('/auth/login')} className='me-2'>Login</Button>
                    <Button onClick={() => navigate('/auth/register')} variant='outline-primary'>Register</Button>
                    </>
                }
                </Nav>
            </Container>
        </NavBar>
    );
}

export default Navbar;