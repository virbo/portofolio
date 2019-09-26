import React from 'react';
import Breadcrumb from 'react-bulma-components/lib/components/breadcrumb';

const Breadcrumbs = (props) => {
    const routes = props.route;
    const lokasi = props.lokasi.pathname;

    const aroute = routes.find((route) => {
        return route.path === lokasi ? route : false;
    })

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
    
}

export default Breadcrumbs;