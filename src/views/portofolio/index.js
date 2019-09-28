import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Section from 'react-bulma-components/lib/components/section';
//import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import LazyImage from '../../components/images';
import { project } from '../../components/firebase';

const Portofolio = () => {
    const [datas, setDatas] = useState([]);

    const getProject = () => {
        project.on('value', snap => {
            setDatas(snap.val());
        })
    }

    useEffect(() => {
        document.title = 'Portofolio';
        getProject();
    }, []);

    return (
        <Section>
            <Heading size={3} renderAs="div" style={{textAlign: 'center'}}>Project yang pernah/sedang dikerjakan</Heading>
            <Heading size={5} subtitle renderAs="div" style={{textAlign: 'center'}}>Klik untuk detailnya</Heading>
            <Columns>
                {
                    datas.map((item, key) => {
                        return (
                            <Columns.Column size={3} key={key}>
                                <Link to="/">
                                    <LazyImage src={item.thumb} />
                                    <Heading size={6} subtitle renderAs="div" style={{textAlign: 'center'}}>{item.title}</Heading>
                                </Link>
                            </Columns.Column>
                        );
                    })
                }
            </Columns>
        </Section>
    );
}

export default Portofolio;