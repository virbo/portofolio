import React, { useState } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Container from 'react-bulma-components/lib/components/container';

import menu from '../../components/menu';

const Header = ( props ) => {
    const [isOpen, setIsOpen] = useState(false);
    const menus = menu.items;
    
    const lokasi = props.lokasi.pathname;
    return (
        <Navbar
            color={'info'}
            active={isOpen}
        >
            <Container fluid>
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
                    {
                        menus.map((item, key) => {
                            return (
                                <Navbar.Item href={item.url} key={key} active={lokasi === item.url ? true : false}>{item.label}</Navbar.Item>
                            );
                        })
                    }
                </Navbar.Container>
            </Navbar.Menu>
            </Container>
        </Navbar>
    );
}

export default Header;