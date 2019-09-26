import React from 'react';
import Footer from 'react-bulma-components/lib/components/footer';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';

const Footers = () => {
    return (
        <Footer style={{marginTop: 20}}>
            <Container>
                <Content style={{ textAlign: 'center' }}>
                    <p>
                        {'Copyright © '+new Date().getFullYear()+' '}
                        <a href="https://dutainformasi.net" target="_blank" rel="noopener noreferrer">
                            https://dutainformasi.net
                        </a>.<br /> 
                        Kode sumber situs ini tersedia di <a href="https://github.com/virbo/portofolio" target="_blank"  rel="noopener noreferrer">Github</a>
                    </p>
                </Content>
            </Container>

        </Footer>
    );
}

export default Footers;