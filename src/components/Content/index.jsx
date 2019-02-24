import React, { Component } from 'react';
import b_ from 'b_';

import Navigation from '../Navigation';
import Sections from '../Sections';
import Footer from '../Footer';

import './index.css';

const b = b_.with('content');

export default class Content extends Component {
  render() {
    const { navLinks, size, sections, footer, menu, logo } = this.props;

    return (
        <div style={{'display': 'none'}} className={b({ opened: menu })}>
            <Navigation navLinks={navLinks} size={size} logo={logo}/>
            <Sections sections={sections} />
            {Footer({footer})}
        </div>
    );
  }
}
