import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import {Skeleton} from '@material-ui/lab';

import Section from 'react-bulma-components/lib/components/section';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import LazyImage from '../../components/images';
import { project } from '../../components/firebase';

const Portofolio = () => {
    const [datas, setDatas] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getProject = () => {
        setLoading(true);
        project.on('value', snap => {
            setDatas(snap.val());
            setLoading(false);
        })
    }

    useEffect(() => {
        document.title = 'Portofolio';
        getProject();
    }, []);

    //console.log(isLoading);
    return (
        <Section>
            {
                isLoading ? 
                    <>
                        <Heading size={3} renderAs="div"><Skeleton variant="rect" height={20} width={600} /></Heading>
                        <Heading subtitle size={3} renderAs="div"><Skeleton variant="rect" height={17} width={200} /></Heading>
                        <Columns>
                            <Columns.Column size={3}>
                                <Skeleton variant="rect" height={150} width={250} />
                                <Skeleton variant="rect" height={15} width={250} style={{marginTop: 10}} />
                                <Skeleton variant="rect" height={15} width={100} style={{marginTop: 10}} />
                            </Columns.Column>
                            <Columns.Column size={3}>
                                <Skeleton variant="rect" height={150} width={250} />
                                <Skeleton variant="rect" height={15} width={250} style={{marginTop: 10}} />
                                <Skeleton variant="rect" height={15} width={100} style={{marginTop: 10}} />
                            </Columns.Column>
                            <Columns.Column size={3}>
                                <Skeleton variant="rect" height={150} width={250} />
                                <Skeleton variant="rect" height={15} width={250} style={{marginTop: 10}} />
                                <Skeleton variant="rect" height={15} width={100} style={{marginTop: 10}} />
                            </Columns.Column>
                            <Columns.Column size={3}>
                                <Skeleton variant="rect" height={150} width={250} />
                                <Skeleton variant="rect" height={15} width={250} style={{marginTop: 10}} />
                                <Skeleton variant="rect" height={15} width={100} style={{marginTop: 10}} />
                            </Columns.Column>
                        </Columns>
                    </>
                :
                    <>
                        <Heading size={3} renderAs="div">Project yang pernah/sedang dikerjakan</Heading>
                        <Heading size={5} subtitle renderAs="div">Klik untuk detailnya</Heading>
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
                    </>
            }
            
        </Section>
    );
}

export default Portofolio;