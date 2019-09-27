import React, {useEffect} from 'react';

import Section from 'react-bulma-components/lib/components/section';
//import Container from 'react-bulma-components/lib/components/container';
import Heading from 'react-bulma-components/lib/components/heading';
import Columns from 'react-bulma-components/lib/components/columns';
import Image from 'react-bulma-components/lib/components/image';

const Portofolio = () => {

    useEffect(() => {
        document.title = 'Portofolio';
    }, [])

    return (
        <Section>
            <Heading size={3} renderAs="div" style={{textAlign: 'center'}}>Project yang telah dikerjakan</Heading>
            <Heading size={5} subtitle renderAs="div" style={{textAlign: 'center'}}>Klik untuk detailnya</Heading>
            <Columns>
                <Columns.Column>
                    <Image 
                        src="https://s3-id-jkt-1.kilatstorage.id/cdn-yusufayuba/assets/img/project/lp-lan" 
                        size="1by1"
                    />
                    <Heading size={6} subtitle renderAs="div" style={{textAlign: 'center'}}>Membangun jaringan LAN dan WAN PT Luwuk Cemerlang (Luwuk Post)</Heading>
                </Columns.Column>
                <Columns.Column>
                    <Image 
                        src="https://s3-id-jkt-1.kilatstorage.id/cdn-yusufayuba/assets/img/project/lp-lan" 
                        size={128}
                    />
                </Columns.Column>
                <Columns.Column>
                    <Image 
                        src="https://s3-id-jkt-1.kilatstorage.id/cdn-yusufayuba/assets/img/project/lp-lan" 
                        size={128}
                    />
                </Columns.Column>
                <Columns.Column>
                    <Image 
                        src="https://s3-id-jkt-1.kilatstorage.id/cdn-yusufayuba/assets/img/project/lp-lan" 
                        size={128}
                    />
                </Columns.Column>
            </Columns>
        </Section>
    );
}

export default Portofolio;