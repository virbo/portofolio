import React, {useEffect} from 'react';

const Resume = () => {

    useEffect(() => {
        document.title = 'Resume';
    }, [])
    return (
        <>
            Resume
        </>
    );
}

export default Resume;