import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import LazyImage from '../../components/images';

import LoadingList from './LoadingList';
import Detail from './detail';

const List = (props) => {
    const loading = props.loading;
    const data = props.data;

    return loading ? <LoadingList /> : (
        <Content>
            <Switch>
                <Route exact={true} path="/portofolio/:id" render={({ match }) => (
                    <Detail data={data.find((cari) => cari.id === parseInt(match.params.id))} loading={loading}></Detail>
                )} />
                <Route exact={true} path="/portofolio" render={() => (
                    <>
                        <Heading size={3} renderAs="div">Project yang pernah/sedang dikerjakan</Heading>
                        <Heading size={5} subtitle renderAs="div">Klik untuk detailnya</Heading>
                        <Columns>
                            {
                                data.map((item, key) => {
                                    return (
                                        <Columns.Column size={3} key={key} style={{textAlign: 'center'}}>
                                            <Link to={`/portofolio/${item.id}`}>
                                                <LazyImage src={item.thumb} />
                                                <Heading size={6} subtitle renderAs="div" style={{textAlign: 'center'}}>{item.title}</Heading>
                                            </Link>
                                        </Columns.Column>
                                    );
                                })
                            }
                        </Columns>
                    </>
                )}/>
            </Switch>
        </Content>
    );
}

export default List;