import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

export default class Navpane extends Component {
    render() {
        return (
            <div className="navigation" >
                <Container>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to='/'>
                                    <Nav.Link >Home</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/Notepad'>
                                    <Nav.Link >Notepad</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/Notes'>
                                    <Nav.Link >Notes</Nav.Link>
                                </LinkContainer>

                                <LinkContainer to='/Quotes'>
                                    <Nav.Link >Inspiration</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Container>
            </div>
        )
    }
}
