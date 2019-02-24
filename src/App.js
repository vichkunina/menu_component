import React from 'react';

import Menu from './components/Menu';

import { size, hrefs, sections, footer } from "./stubs";

const App = () =>
    <div>
        <Menu size={size} hrefArray={hrefs} sections={sections} footer={footer} />
    </div>

export default App;
