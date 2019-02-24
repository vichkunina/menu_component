import React from 'react';

import Menu from './components/Menu';

import { size, navLinks, sections, footer, logo } from "./stubs";

const App = () =>
    <Menu size={size}
        navLinks={navLinks}
        sections={sections}
        footer={footer}
        logo={logo}
    />

export default App;
