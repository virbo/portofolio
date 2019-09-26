import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layouts from './views/layouts';

const App = () => {
    return (
        <BrowserRouter>
            <Route path="/" name="Beranda" component={Layouts} />
        </BrowserRouter>
    );
}

export default App;