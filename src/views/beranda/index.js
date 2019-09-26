import React, {useState} from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Card from 'react-bulma-components/lib/components/card';
import Media from 'react-bulma-components/lib/components/media';
import Heading from 'react-bulma-components/lib/components/heading';
import Content from 'react-bulma-components/lib/components/content';
import Button from 'react-bulma-components/lib/components/button';
import Progress from 'react-bulma-components/lib/components/progress';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin, faFacebook, faTwitter} from '@fortawesome/free-brands-svg-icons';

import foto from '../../components/img/selfi.jpg';

const Beranda = () => {
    const [isLp, setLp] = useState(false);
    const [isAkper, setAkper] = useState(false);
    const [isUml, setUml] = useState(false);

    return (
        <Columns>
            <Columns.Column size={6}>
                <Card.Image src={foto} />
                <h1>Keahlian</h1>
                <Columns>
                    <Columns.Column size={6}>
                        <h5>Pemrograman</h5>
                        <Columns>
                            <Columns.Column size={6}>Delphi</Columns.Column>
                            <Columns.Column size={6}><Progress max={100} value={85} color="primary" size="small" /></Columns.Column>
                        </Columns>
                        <Columns>
                            <Columns.Column size={6}>ASP</Columns.Column>
                            <Columns.Column size={6}><Progress max={100} value={85} color="primary" size="small" /></Columns.Column>
                        </Columns>
                        <Columns>
                            <Columns.Column size={6}>PHP</Columns.Column>
                            <Columns.Column size={6}><Progress max={100} value={85} color="primary" size="small" /></Columns.Column>
                        </Columns>
                        <Columns>
                            <Columns.Column size={6}>jQuery</Columns.Column>
                            <Columns.Column size={6}><Progress max={100} value={50} color="warning" size="small" /></Columns.Column>
                        </Columns>
                        <Columns>
                            <Columns.Column size={6}>Codeigniter</Columns.Column>
                            <Columns.Column size={6}><Progress max={100} value={85} color="primary" size="small" /></Columns.Column>
                        </Columns>
                    </Columns.Column>
                    <Columns.Column size={6}>
                        <h5></h5>
                        <Columns>
                            <Columns.Column size={6}>Yii2</Columns.Column>
                            <Columns.Column size={6}><Progress max={100} value={85} color="primary" size="small" /></Columns.Column>
                        </Columns>
                        <Columns>
                            <Columns.Column size={6}>ReactJS</Columns.Column>
                            <Columns.Column size={6}><Progress max={100} value={50} color="warning" size="small" /></Columns.Column>
                        </Columns>
                        <Columns>
                            <Columns.Column size={6}>React Native</Columns.Column>
                            <Columns.Column size={6}><Progress max={100} value={50} color="warning" size="small" /></Columns.Column>
                        </Columns>
                        <Columns>
                            <Columns.Column size={6}>Flutter</Columns.Column>
                            <Columns.Column size={6}><Progress max={100} value={50} color="warning" size="small" /></Columns.Column>
                        </Columns>
                    </Columns.Column>
                </Columns>
                <hr />
                <Columns>
                    <Columns.Column size={6}>
                        <h5>Network</h5>
                        <Columns>
                            <Columns.Column size={6}>Mikrotik</Columns.Column>
                            <Columns.Column size={6}><Progress max={100} value={50} color="warning" size="small" /></Columns.Column>
                        </Columns>
                        <Columns>
                            <Columns.Column size={6}>Linux Server</Columns.Column>
                            <Columns.Column size={6}><Progress max={100} value={65} color="info" size="small" /></Columns.Column>
                        </Columns>
                    </Columns.Column>
                </Columns>
            </Columns.Column>
            <Columns.Column size={6}>
                <h1>Hi, saya Yusuf Ayuba</h1>
                <p>
                    Seorang full stack developer yang memiliki pengalaman lebih dari 10 tahun sebagai programmer. 
                    Selain itu saya juga bekerja sebagai tenaga pengajar 
                    di <a href="http://unismuhluwuk.ac.id" target="_blank" rel="noopener noreferrer">Universitas Muhammadiyah Luwuk.</a>
                </p>
                <p>
                    <a href="https://github.com/virbo" title="Github account" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon size="lg" icon={faGithub} /></a>{' '}
                    <a href="https://facebook.com/yusuf.web" title="Facebook account" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon size="lg" icon={faFacebook} /></a>{' '}
                    <a href="https://twitter.com/yusufayuba" title="Twitter account" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon size="lg" icon={faTwitter} /></a>{' '}
                    <a href="https://www.linkedin.com/in/yusufayuba" title="Linkedin account" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon size="lg" icon={faLinkedin} /></a>{' '}
                    <a href="mailto:hello@yusufayuba.net" title="Email" ><FontAwesomeIcon size="lg" icon={faEnvelope} /></a>{' '}
                </p>
                <h1>Pengalaman Kerja</h1>
                <Card>
                    <Card.Content>
                        <Media>
                            <Media.Item>
                                <Heading size={5}>IT Support ( Luwuk Post )</Heading>
                                <Heading subtitle size={6}>
                                    Januari 2009 - Agustus 2017
                                </Heading>
                            </Media.Item>
                        </Media>
                        {
                            !isLp ? null : 
                            <Content>
                                Melakukan pemeliharaan dan pengembangan terhadap perangkat komputer dan jaringan LAN/WAN. 
                                Melakukan pengembangan aplikasi internal beserta website.
                            </Content>
                        }
                        <Button color="info" className="toggle" aria-label="togel" onClick={() => setLp(!isLp)}>{isLp ? 'Tutup' : 'Detail'}</Button>
                    </Card.Content>
                </Card><br />
                <Card>
                    <Card.Content>
                        <Media>
                            <Media.Item>
                                <Heading size={5}>Kepala Unit Informasi dan Teknologi ( Akademi Keperawatan Luwuk )</Heading>
                                <Heading subtitle size={6}>
                                    Desember 2009 - Sekarang
                                </Heading>
                            </Media.Item>
                        </Media>
                        {
                            !isAkper ? null :
                            <Content>
                                Melakukan pemeliharaan dan pengembangan terhadap perangkat komputer dan jaringan LAN/WAN. 
                                Melakukan pengembangan aplikasi internal beserta website. Membantu akademik dalam hal pelaporan 
                                data PDDIKTI.
                            </Content>
                        }
                        <Button color="info" className="toggle" aria-label="togel" onClick={() => setAkper(!isAkper)}>{isAkper ? 'Tutup' : 'Detail'}</Button>
                    </Card.Content>
                </Card><br />
                <Card>
                    <Card.Content>
                        <Media>
                            <Media.Item>
                                <Heading size={5}>Dosen Fakultas Teknik ( Universitas Muhammadiyah Luwuk )</Heading>
                                <Heading subtitle size={6}>
                                    September 2009 - Sekarang
                                </Heading>
                            </Media.Item>
                        </Media>
                        {
                            !isUml ? null :
                            <Content>
                                Melakukan pemeliharaan dan pengembangan terhadap perangkat komputer dan jaringan LAN/WAN. 
                                Melakukan pengembangan aplikasi internal beserta website. Membantu akademik dalam hal pelaporan 
                                data PDDIKTI.
                            </Content>
                        }
                        <Button color="info" className="toggle" aria-label="togel" onClick={() => setUml(!isUml)}>{isUml ? 'Tutup' : 'Detail'}</Button>
                    </Card.Content>
                </Card>
            </Columns.Column>
        </Columns>
    );
}

export default Beranda;