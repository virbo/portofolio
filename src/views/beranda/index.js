import React, {useState, useEffect} from 'react';
import Columns from 'react-bulma-components/lib/components/columns';
import Content from 'react-bulma-components/lib/components/content';

import { dashboard } from '../../components/firebase';
import Pengalaman from './pengalaman';
import Profil from './profil';
import Skill from './skill';

const Beranda = () => {
    const [datas, setDatas] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getDashboard = () => {
        setLoading(true);
        dashboard.on('value', snap => {
            const data = snap.val();
            setDatas(data);
            setLoading(false);
        })
    }

    useEffect(() => {
        document.title = 'Beranda :: Personal Portofolio';
        getDashboard();
    }, [])

    return (
        <Content>
            <Columns>
                <Columns.Column size={6}><Profil data={datas.profil} sosmed={datas.sosmed} loading={isLoading} /></Columns.Column>
                <Columns.Column size={6}><Pengalaman data={datas.experience} loading={isLoading} /></Columns.Column>
            </Columns>
            <hr />
            <Skill data={datas.skill} loading={isLoading} />
        </Content>
    );
}

export default Beranda;