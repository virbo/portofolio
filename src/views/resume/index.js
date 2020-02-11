import React, {useEffect} from 'react';

import Heading from 'react-bulma-components/lib/components/heading';
import Container from 'react-bulma-components/lib/components/container';
import Content from 'react-bulma-components/lib/components/content';
import Section from 'react-bulma-components/lib/components/section';
import Button from 'react-bulma-components/lib/components/button';

import {PDFExport} from '@progress/kendo-react-pdf';

const Resume = (props) => {
    //const resumes;

    useEffect(() => {
        document.title = 'Resume';
    }, []);

    const simpanPdf = () => {
        props.save();
    }

    return (
        <Content>
            <Heading size={3} renderAs="div">
                <Button color="info" onClick={() => simpanPdf()}>Download</Button>
            </Heading>
            
            <PDFExport 
                paperSize={'Letter'}
                fileName="YusufAyubaResume.pdf"
                title="Yusuf Ayuba Resume"
                subject="Subject Resume"
                keywords="yusufayuba, resume, portofolio"
                ref={(r) => props = r}
            >
                <Content>
                    Isi Resume
                </Content>
            </PDFExport>
        </Content>
    );
}

export default Resume;