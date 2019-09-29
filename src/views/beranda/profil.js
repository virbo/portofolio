import React from 'react';

import Columns from 'react-bulma-components/lib/components/columns';
import Content from 'react-bulma-components/lib/components/columns';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';
import LazyImage from '../../components/images';
import { Skeleton } from '@material-ui/lab';
import { Link } from '@material-ui/core';

const Profil = (props) => {
    const data = props.data;
    const sosmed = props.sosmed;
    const loading = props.loading;
    
    return loading ? <LoadingSkeleton /> : (
        <Columns>
            <Columns.Column>
                <Content style={{textAlign: 'center'}}>
                    <LazyImage alt="Yusuf Ayuba" src={data.image} />
                    <p style={{textAlign: 'right'}}>
                        <Link href={sosmed.github} target="_blank"><FontAwesomeIcon size="lg" icon={faGithub} /></Link>{' '}
                        <Link href={sosmed.facebook} target="_blank"><FontAwesomeIcon size="lg" icon={faFacebook} /></Link>{' '}
                        <Link href={sosmed.linkedin} target="_blank"><FontAwesomeIcon size="lg" icon={faLinkedin} /></Link>{' '}
                        <Link href={sosmed.twitter} target="_blank"><FontAwesomeIcon size="lg" icon={faTwitter} /></Link>{' '}
                        <Link href={sosmed.email} target="_blank"><FontAwesomeIcon size="lg" icon={faEnvelope} /></Link>
                    </p>
                </Content>
                <h1>{data.salam}</h1>
                <p>{data.description}</p>
            </Columns.Column>
        </Columns>
    );
}

const LoadingSkeleton = () => {
    return (

        <Columns>
            <Columns.Column>
                <Skeleton height={300} />
                <Skeleton width="30%" />
                <Skeleton width="80%" />
                <Skeleton height={100} />
            </Columns.Column>
        </Columns>
    );
}

export default Profil;