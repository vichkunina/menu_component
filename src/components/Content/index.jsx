import React, { Component } from 'react';
import b_ from 'b_';

import Navigation from '../Navigation';
import Section from '../Section';
import Footer from '../Footer';

import './index.css';

const b = b_.with('content');

export default class Content extends Component {
  render() {
    const { hrefArray, size, sections, footer, menu } = this.props;
    const className = menu ? b({ opened: true }) : b();

    return (
        <div style={{ 'display': 'none' }} className={className}>
            <Navigation hrefArray={hrefArray} size={size} />
            {size === "full" && (
                <Section hrefArray={hrefArray} size={size} sections={sections} />
            )}
            <Footer footer={footer} />
        </div>
    );
  }
}
