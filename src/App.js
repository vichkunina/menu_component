import React from 'react';

import Menu from './components/Menu';

import './App.css';

import { size, hrefs, sections, footer } from "./stubs";

const App = () =>
    <div className="App">
        <Menu size={size} hrefArray={hrefs} sections={sections} footer={footer} />
    </div>

export default App;
