import React from 'react';
import {Link} from 'react-router-dom';
import Button from 'react-bulma-components/lib/components/button';
import Section from 'react-bulma-components/lib/components/section';
import Content from 'react-bulma-components/lib/components/content';
import Columns from 'react-bulma-components/lib/components/columns';
import Heading from 'react-bulma-components/lib/components/heading';
import LazyImage from '../../components/images';

const Detail = (props) => {
    const data = props.data;
    //console.log(data);
    return (
        <Content>
            <Link to="/portofolio">
                <Button color="info">Kembali</Button>
            </Link>
            <Section>
                <Columns>
                    <Columns.Column size={6}>
                        <LazyImage src={data.img} />
                    </Columns.Column>
                    <Columns.Column size={6}>
                        <Heading size={4} renderAs="div">{data.title}</Heading>
                        <Heading size={5} subtitle renderAs="p">{data.description}</Heading>
                        <p>Tahun: {data.tahun}</p>
                    </Columns.Column>
                </Columns>
            </Section>
        </Content>
    );
}

export default Detail;