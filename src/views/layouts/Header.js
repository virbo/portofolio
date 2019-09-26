import React, { useState } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';

const Header = ({ props }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Navbar
            color={'primary'}
            active={isOpen}
        >
            <Navbar.Brand>
                <Navbar.Item renderAs="a" href="/">
                    YA
                </Navbar.Item>
                <Navbar.Burger
                    //active={isOpen}
                    onClick={() => setIsOpen(!isOpen)}
                />
            </Navbar.Brand>
            <Navbar.Menu>
                <Navbar.Container position="end">
                    <Navbar.Item href="/">Beranda</Navbar.Item>
                    <Navbar.Item href="/portofolio">Portofolio</Navbar.Item>
                    <Navbar.Item href="/resume">Resume</Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
        </Navbar>
    );
}

export default Header;