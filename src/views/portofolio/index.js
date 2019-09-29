import React, { useState, useEffect } from 'react';
import Content from 'react-bulma-components/lib/components/content';
import { project } from '../../components/firebase';
import List from './list';

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

    return (
        <Content>
            <List data={datas} loading={isLoading} />
        </Content>
    );
}

export default Portofolio;