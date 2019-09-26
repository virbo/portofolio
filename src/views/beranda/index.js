import React from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Card from 'react-bulma-components/lib/components/card';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import foto from '../../components/img/selfi.jpg';

const Beranda = () => {
    return (
        <Columns>
            <Columns.Column size={6}>
                <Card.Image src={foto} />
            </Columns.Column>
            <Columns.Column size={6}>
                <h1>Hi, saya Yusuf Ayuba</h1>
                <p>
                    Seorang full stack developer yang memiliki pengalaman lebih dari 10 tahun sebagai programmer. 
                    Selain itu saya juga bekerja sebagai salah satu tenaga pengajar 
                    di <a href="http://unismuhluwuk.ac.id" target="_blank" rel="noopener noreferrer">Universitas Muhammadiyah Luwuk.</a><br />
                    <a href="https://github.com/virbo" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>{' '}
                    <a href="https://www.linkedin.com/in/yusufayuba" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>{' '}
                    <a href="mailto:yusufayuba@live.com"><FontAwesomeIcon icon={faEnvelope} /></a>{' '}
                </p>
                <h1>Keahlian</h1>
                <h3>Bahasa pemrograman dan Framework</h3>
                <ol>
                    <li>Delphi</li>
                    <li>ASP</li>
                    <li>PHP</li>
                    <li>jQuery</li>
                    <li>Codeigniter</li>
                    <li>Yii2 Framework</li>
                    <li>ReactJS</li>
                    <li>React Native</li>
                    <li>Flutter</li>
                </ol>
            </Columns.Column>
        </Columns>
    );
}

export default Beranda;