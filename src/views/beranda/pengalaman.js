import React, {useState} from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button';
import { Skeleton } from '@material-ui/lab';

const Pengalaman = (props) => {
    const data = props.data;
    const loading = props.loading;

    const [idItem, setId] = useState(0);
    const [isShow, setShow] = useState(false);

    const showDetail = (id) => {
        const _get = data.find((test) =>test.id === id);
        setId(id);
        setShow(_get ? !isShow : null);
    }

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
                                    <Content>{isShow && item.id === idItem ? item.description : null}</Content>
                                    <Button color="info" onClick={() => showDetail(item.id)}>{isShow && item.id === idItem ? 'Tutup' : 'Detail'}</Button>
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