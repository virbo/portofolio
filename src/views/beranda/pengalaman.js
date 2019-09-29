import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import { Skeleton } from '@material-ui/lab';

const Pengalaman = (props) => {
    const data = props.data;
    const loading = props.loading;

    return loading ? <LoadingSkeleton /> : (
        <Columns>
            <Columns.Column>
                <h1>Pengalaman Kerja</h1>
                {
                    data.map((item, key) => {
                        return (
                            <Card key={key} style={{marginBottom: 20}}>
                                <Card.Content>
                                    <Media>
                                        <Media.Item>
                                            <Heading size={6}>{item.title}</Heading>
                                            <Heading subtitle size={6}>{item.periode}</Heading>
                                        </Media.Item>
                                    </Media>
                                    <Content>{item.description}</Content>
                                </Card.Content>
                            </Card>
                        );
                    })
                }
            </Columns.Column>
        </Columns>
    );
}

const LoadingSkeleton = () => {
    return (
        <Columns>
            <Columns.Column>
                <Skeleton />
                <Skeleton height={200} />
                <Skeleton height={200} />
                <Skeleton height={200} />
            </Columns.Column>
        </Columns>
    );
} 

export default Pengalaman;