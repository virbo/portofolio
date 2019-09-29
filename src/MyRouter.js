import React from 'react';

import Loadable from 'react-loadable';
import Loader from 'react-bulma-components/lib/components/loader';

import Layouts from './views/layouts';

function loading() {
    return (<Loader />);
}

const Home = Loadable({
    loader: () => import('./views/beranda'),
    loading: loading
});

const Porto = Loadable({
    loader: () => import('./views/portofolio'),
    loading: loading
});

const Resum = Loadable({
    loader: () => import('./views/resume'),
    loading: loading
});

const MyRouter = [
    {path: "/", alias: "/", exact: true, name: "Beranda", component: Layouts},
    {path: "/beranda", alias: "/beranda", exact: true, name: "Beranda", component: Home},
    {path: "/portofolio", alias: "/portofolio", exact: true, name: "Project", component: Porto},
    {path: "/portofolio/:id", alias: "/portofolio", exact: true, name: "Project", component: Porto},
    {path: "/resume", alias: "/resume", exact: true, name: "Resume", component: Resum},
];

export default  MyRouter;