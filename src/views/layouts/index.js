import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';

import Header from './Header';
import Footer from './Footer';
import MyRouter from '../../MyRouter';

const Layouts = () => {
    return (
        <>
            <Header />
            <Container fluid>
                <Content style={{marginTop: 20}}>
                    <Switch>
                        {
                            MyRouter.map((router, key) => {
                                return router.component ?
                                    (<Route 
                                        key={key}
                                        path={router.path}
                                        exact={router.exact}
                                        name={router.name}
                                        render={
                                            props => (
                                                <router.component {...props} />
                                            )
                                        }
                                    />) : (null);
                            })
                        }
                        <Redirect from="/" to="/beranda" />
                    </Switch>
                </Content>
            </Container>
            <Footer />
        </>
    );
}

export default Layouts;