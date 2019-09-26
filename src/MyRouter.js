import Loadable from 'react-loadable';
import Layouts from './views/layouts';

function loading() {
    return "Loading...";
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
    {path: "/", exact: true, name: "Beranda", component: Layouts},
    {path: "/beranda", exact: true, name: "Beranda", component: Home},
    {path: "/portofolio", exact: true, name: "Portofolio", component: Porto},
    {path: "/resume", exact: true, name: "Resume", component: Resum},
];

export default  MyRouter;