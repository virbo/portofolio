import React, {useState, useEffect} from 'react';
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
import LazyImage from '../../components/images';

const Beranda = () => {
    const [isLp, setLp] = useState(false);
    const [isAkper, setAkper] = useState(false);
    const [isUml, setUml] = useState(false);

    useEffect(() => {
        document.title = 'Beranda :: Personal Portofolio';
    }, [])

    return (
        <>
            <Columns>
                <Columns.Column size={6}>
                    <Content style={{textAlign: 'center'}}>
                        <LazyImage
                            //width={550}
                            alt="Yusuf Ayuba"
                            src="https://s3-id-jkt-1.kilatstorage.id/cdn-yusufayuba/assets/img/personal/selfi.jpg"
                        />
                        <p style={{textAlign: 'right'}}>
                            <a href="https://github.com/virbo" title="Github account" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon size="lg" icon={faGithub} /></a>{' '}
                            <a href="https://facebook.com/yusuf.web" title="Facebook account" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon size="lg" icon={faFacebook} /></a>{' '}
                            <a href="https://twitter.com/yusufayuba" title="Twitter account" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon size="lg" icon={faTwitter} /></a>{' '}
                            <a href="https://www.linkedin.com/in/yusufayuba" title="Linkedin account" target="_blank"  rel="noopener noreferrer"><FontAwesomeIcon size="lg" icon={faLinkedin} /></a>{' '}
                            <a href="mailto:hello@yusufayuba.net" title="Email" ><FontAwesomeIcon size="lg" icon={faEnvelope} /></a>{' '}
                        </p>
                    </Content>
                    <h1>Hi, saya Yusuf Ayuba</h1>
                    <p>
                        Seorang full stack developer yang memiliki pengalaman lebih dari 10 tahun sebagai programmer. 
                        Selain itu saya juga bekerja sebagai tenaga pengajar 
                        di <a href="http://unismuhluwuk.ac.id" target="_blank" rel="noopener noreferrer">Universitas Muhammadiyah Luwuk.</a>
                    </p>
                </Columns.Column>
                <Columns.Column size={6}>
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
                                    <Heading size={5}>Tenaga Pengajar ( Universitas Muhammadiyah Luwuk )</Heading>
                                    <Heading subtitle size={6}>
                                        September 2009 - Sekarang
                                    </Heading>
                                </Media.Item>
                            </Media>
                            {
                                !isUml ? null :
                                <Content>
                                    Melaksanakan kegiatan mengajar dan mendidik mahasiswa yang ada di fakultas teknik khususnya dan 
                                    mahasiswa Universitas Muhammadiyah Luwuk pada umumnya, 
                                    serta melaksanakan pengabdian terhadap masyarakat.
                                </Content>
                            }
                            <Button color="info" className="toggle" aria-label="togel" onClick={() => setUml(!isUml)}>{isUml ? 'Tutup' : 'Detail'}</Button>
                        </Card.Content>
                    </Card>
                </Columns.Column>
            </Columns>
            <hr />
            <Columns>
                <Columns.Column><h1>Keahlian</h1></Columns.Column>
            </Columns>
            <Columns>
                <Columns.Column size={6}>
                    <Columns>
                        <Columns.Column><h5>Pemrograman</h5></Columns.Column>
                    </Columns>
                    <Columns>
                        <Columns.Column size={6}>
                            <Columns>
                                <Columns.Column>
                                    Delphi<br />
                                    <Progress max={100} value={85} color="primary" size="small" />
                                </Columns.Column>
                            </Columns>
                            <Columns>
                                <Columns.Column>
                                    ASP<br />
                                    <Progress max={100} value={85} color="primary" size="small" />
                                    </Columns.Column>
                            </Columns>
                            <Columns>
                                <Columns.Column>
                                    PHP<br />
                                    <Progress max={100} value={85} color="primary" size="small" />
                                </Columns.Column>
                            </Columns>
                            <Columns>
                                <Columns.Column>
                                    jQuery<br />
                                    <Progress max={100} value={50} color="warning" size="small" />
                                </Columns.Column>
                            </Columns>
                            <Columns>
                                <Columns.Column>
                                    Codeigniter<br />
                                    <Progress max={100} value={85} color="primary" size="small" />
                                </Columns.Column>
                            </Columns>
                        </Columns.Column>
                        <Columns.Column size={6}>
                            <Columns>
                                <Columns.Column>
                                    Yii2<br />
                                    <Progress max={100} value={85} color="primary" size="small" />
                                </Columns.Column>
                            </Columns>
                            <Columns>
                                <Columns.Column>
                                    ReactJS<br />
                                    <Progress max={100} value={50} color="warning" size="small" />
                                </Columns.Column>
                            </Columns>
                            <Columns>
                                <Columns.Column>
                                    React Native<br />
                                    <Progress max={100} value={50} color="warning" size="small" />
                                </Columns.Column>
                            </Columns>
                            <Columns>
                                <Columns.Column>
                                    Flutter<br />
                                    <Progress max={100} value={50} color="warning" size="small" />
                                </Columns.Column>
                            </Columns>
                        </Columns.Column>
                    </Columns>
                </Columns.Column>
                <Columns.Column size={6}>
                    <Columns>
                        <Columns.Column><h5>Networking</h5></Columns.Column>
                    </Columns>
                    <Columns>
                        <Columns.Column>
                            <Columns>
                                <Columns.Column>
                                    Mikrotik<br />
                                    <Progress max={100} value={50} color="warning" size="small" />
                                </Columns.Column>
                            </Columns>
                            <Columns>
                                <Columns.Column>
                                    Linux Server<br />
                                    <Progress max={100} value={65} color="info" size="small" />
                                </Columns.Column>
                            </Columns>
                        </Columns.Column>
                    </Columns>
                </Columns.Column>
            </Columns>
        </>
    );
}

export default Beranda;