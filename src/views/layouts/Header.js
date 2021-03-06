import React, { useState } from 'react';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Container from 'react-bulma-components/lib/components/container';

import menu from '../../components/menu';
import LazyImage from '../../components/images';

import logo from '../../components/images/logo-brand.png';

const Header = ( props ) => {
    const [isOpen, setIsOpen] = useState(false);
    const menus = menu.items;
    
    const lokasi = props.lokasi.pathname;
    const split = lokasi.split("/");

    return (
        <Navbar
            color={'info'}
            active={isOpen}
        >
            <Container fluid>
            <Navbar.Brand>
                <Navbar.Item href="/beranda">
                    <LazyImage src={logo} style={{marginTopn: 10}} />
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
                                <Navbar.Item href={item.url} key={key} active={`/${split[1]}` === item.url ? true : false}>{item.label}</Navbar.Item>
                            );
                        })
                    }<Navbar.Item href="https://dutainformasi.net" target="_blank">Blog</Navbar.Item>
                </Navbar.Container>
            </Navbar.Menu>
            </Container>
        </Navbar>
    );
}

export default Header;