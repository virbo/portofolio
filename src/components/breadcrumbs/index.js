import React from 'react';
import Breadcrumb from 'react-bulma-components/lib/components/breadcrumb';

const Breadcrumbs = (props) => {
    const routes = props.route;
    const lokasi = props.lokasi.pathname;
    const split = lokasi.split("/");

    //const aroute = routes.find((route) => {
    //    return route.path === lokasi ? route : false;
    //})
    const aroute = routes.find((route) => route.path === `/${split[1]}`);

    const item = [
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
    
    return aroute.path !== '/beranda' ? <Breadcrumb items={item} /> : null;
    //return null
    
}

export default Breadcrumbs;