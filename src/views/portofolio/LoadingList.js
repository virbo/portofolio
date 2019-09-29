import React from 'react';
import Content from 'react-bulma-components/lib/components/content';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';

import { Skeleton } from '@material-ui/lab';

const LoadingList = () => {
    return (
        <Content>
            <Heading size={3} renderAs="div"><Skeleton variant="rect" height={20} width="75%" /></Heading>
            <Heading subtitle size={3} renderAs="div"><Skeleton variant="rect" height={17} width="50%" /></Heading>
            <Columns>
                <Columns.Column size={3}>
                    <Skeleton variant="rect" height={150} />
                    <Skeleton variant="rect" height={15} style={{marginTop: 10}} />
                    <Skeleton variant="rect" height={15} width="50%" style={{marginTop: 10}} />
                </Columns.Column>
                <Columns.Column size={3}>
                    <Skeleton variant="rect" height={150} />
                    <Skeleton variant="rect" height={15} style={{marginTop: 10}} />
                    <Skeleton variant="rect" height={15} width="50%" style={{marginTop: 10}} />
                </Columns.Column>
                <Columns.Column size={3}>
                    <Skeleton variant="rect" height={150} />
                    <Skeleton variant="rect" height={15} style={{marginTop: 10}} />
                    <Skeleton variant="rect" height={15} width="50%" style={{marginTop: 10}} />
                </Columns.Column>
                <Columns.Column size={3}>
                    <Skeleton variant="rect" height={150} />
                    <Skeleton variant="rect" height={15} style={{marginTop: 10}} />
                    <Skeleton variant="rect" height={15} width="50%" style={{marginTop: 10}} />
                </Columns.Column>
            </Columns>
        </Content>
    );
}

export default LoadingList;