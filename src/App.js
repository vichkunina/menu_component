import React, { Component } from 'react';
import './App.css';

import Menu from './components/Menu'
import { component1,
    component2, 
    component3, 
    component4, 
    component5, 
    footerComponent 
} from './stubs';

const hrefs = [
    {
        href: 'home',
        title: 'home',
    },
    {
        href: 'SCHEDULE',
        title: 'SCHEDULE',
    },
    {
        href: 'SPEAKERS',
        title: 'SPEAKERS',
    },
    {
        href: 'SPEAKERS',
        title: 'SPEAKERS',
    },
    {
        href: 'SPEAKERS',
        title: 'SPEAKERS',
    },
    {
        href: 'SPEAKERS',
        title: 'SPEAKERS',
    }
]

const sections = [
    {
        title: {
            name: 'ABOUT',
            href: 'asdasdasd'
        },
        content: component1
    },
    {
        title: {
            name: 'VENUE',
        },
        content: component2
    },
    {
        title: {
            name: 'TICKETS',
            href: 'asdasdasd'
        },
        content: component3
    },
    {
        title: {
            name: 'PREVIOUS YEARS',
            href: 'asdasdasd'
        },
        content: component4
    },
    {
        title: {
            name: 'ОК16 CULTURAL HUB',
            href: 'asdasdasd'
        },
        content: component5
    },
]

const footer = {
  content: footerComponent,
}

const size = 'full'
// const size = 'half'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu
            size={size}
            hrefArray={hrefs}
            sections={sections}
            footer={footer} />
      </div>
    );
  }
}

export default App;
