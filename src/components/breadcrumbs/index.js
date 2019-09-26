import React from 'react';
import Breadcrumb from 'react-bulma-components/lib/components/breadcrumb';

const Breadcrumbs = (props) => {
    const routes = props.route;
    const lokasi = props.lokasi.pathname;

    const aroute = routes.find((route) => {
        return route.path === lokasi ? route : false;
    })

    const item = aroute.path === '/beranda' ? 
        [
            {
                name: 'Beranda',
                url: "/",
                active: true
            },
        ] : 
        [
            {
                name: 'Beranda',
                url: "/"
            },
            {
                name: aroute.name,
                url: aroute.path,
                active: true
            }
        ];
    
    return (
        <Breadcrumb 
            items={item}
        />
    );
}

export default Breadcrumbs;