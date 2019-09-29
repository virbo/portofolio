import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Section from 'react-bulma-components/lib/components/section';

import Header from './Header';
import Footers from './Footer';
import MyRouter from '../../MyRouter';
import Breadcrumbs from '../../components/breadcrumbs';

const Layouts = (props) => {
    const lokasi = props.location;
    return (
        <>
            <Header lokasi={lokasi} />
            <Container style={{minHeight: 500}} fluid>
                <Section>
                    <Breadcrumbs route={MyRouter} lokasi={lokasi} />
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
                </Section>
            </Container>
            <Footers />
        </>
    );
}

export default Layouts;